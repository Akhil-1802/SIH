import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Webcam from "react-webcam";

const Complaints = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [location, setLocation] = useState(null);
  const [useCamera, setUseCamera] = useState(false);
  const [photo, setPhoto] = useState(null);
  const webcamRef = useRef(null);

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhoto(imageSrc);
    setUseCamera(false);
  };

  const handleLocationFetch = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        alert("Unable to retrieve your location");
      }
    );
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      // Append regular fields
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("description", data.description);

      // Append location as JSON string (if available)
      if (location) {
        formData.append("location", JSON.stringify(location));
      }

      // Append photo as file/blob if exists
      if (photo) {
        if (photo.startsWith("data:image")) {
          // Convert base64 string to Blob
          const res = await fetch(photo);
          const blob = await res.blob();
          formData.append("photo", blob, "photo.jpg"); // You can change filename and extension if you want
        }
      }

      const response = await fetch("http://localhost:3000/user/complaint", {
        method: "POST",
        credentials: "include",
        body: formData, // Notice no 'Content-Type' header, browser sets it automatically for multipart/form-data
      });

      if (response.ok) {
        alert("Complaint submitted successfully!");
        window.location.reload(); // this will refresh the page
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error("Error submitting complaint:", error);
      alert("Failed to submit complaint");
    }
  };

  return (
    <main className="flex-1 bg-white py-8 px-10 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-7">
        Report a Complaint
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-green-50 rounded-xl p-6 border border-green-100 space-y-6"
      >
        {/* Name */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="John Doe"
            className="w-full border rounded-lg bg-green-100 px-4 py-2 focus:outline-none focus:ring focus:ring-green-200"
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Email
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            placeholder="example@mail.com"
            className="w-full border rounded-lg bg-green-100 px-4 py-2 focus:outline-none focus:ring focus:ring-green-200"
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Issue Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="Describe the issue in detail..."
            rows={4}
            className="w-full border rounded-lg bg-green-100 px-4 py-2 focus:outline-none focus:ring focus:ring-green-200"
          />
          {errors.description && (
            <span className="text-sm text-red-500">
              {errors.description.message}
            </span>
          )}
        </div>

        {/* Upload Photo */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Add Photo (optional)
          </label>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button
              type="button"
              onClick={() => setUseCamera(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
            >
              📷 Use Camera
            </button>
            <span className="text-gray-500 text-sm">or</span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onloadend = () => setPhoto(reader.result);
                if (file) reader.readAsDataURL(file);
              }}
              className="text-sm file:bg-green-600 file:text-white file:rounded-lg file:px-4 file:py-2 file:mr-3 file:border-0"
            />
          </div>

          {useCamera && (
            <div className="mt-4 bg-green-100 rounded-xl p-4 border border-green-200">
              <Webcam
                ref={webcamRef}
                audio={false}
                screenshotFormat="image/jpeg"
                className="rounded-lg border border-green-200 w-full max-w-md"
              />
              <div className="flex gap-3 mt-3">
                <button
                  type="button"
                  onClick={handleCapture}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
                >
                  ✅ Capture
                </button>
                <button
                  type="button"
                  onClick={() => setUseCamera(false)}
                  className="text-gray-600 hover:text-gray-800 px-4 py-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {photo && (
            <div className="mt-4 bg-green-100 rounded-xl p-4 border border-green-200">
              <p className="text-sm text-gray-700 mb-2">Photo Preview:</p>
              <img
                src={photo}
                alt="Preview"
                className="w-32 h-32 rounded-lg object-cover border border-green-200"
              />
            </div>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Location (optional)
          </label>
          <button
            type="button"
            onClick={handleLocationFetch}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
          >
            📍 Fetch Location
          </button>
          {location && (
            <div className="mt-2 bg-green-100 text-green-800 text-sm px-4 py-2 rounded-lg border border-green-200">
              Latitude: {location.lat}, Longitude: {location.lng}
            </div>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold text-lg"
        >
          🚀 Submit Complaint
        </button>
      </form>
    </main>
  );
};

export default Complaints;
