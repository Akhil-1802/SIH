import React, { useRef, useState } from "react";

export default function RegisterWaste() {
  const [form, setForm] = useState({
    type: "Food Waste",
    weight: "",
    address: "",
    date: "",
    notes: "",
  });
  const [image, setImage] = useState(null);
  const fileRef = useRef();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () =>
      setImage({ url: reader.result, name: file.name });
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Waste registered with image proof!");
  };

  return (
    <main className="flex-1 bg-white py-8 px-10 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-7">Register Biodegradable Waste</h1>
      <form className="bg-green-50 rounded-xl p-7 border border-green-100 w-full" onSubmit={handleSubmit}>
        <div className="font-bold text-lg text-green-800 mb-3">Waste Registration</div>
        <div className="text-gray-700 text-sm mb-6">Register your biodegradable waste for proper disposal</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm mb-1">Waste Type</label>
            <select name="type" value={form.type} onChange={handleChange} className="w-full border rounded-lg bg-green-100 px-4 py-2 focus:outline-none focus:ring focus:ring-green-200">
              <option>Food Waste</option>
              <option>Garden Waste</option>
              <option>Organic Residue</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-1">Estimated Weight (kg)</label>
            <input type="number" name="weight" value={form.weight} onChange={handleChange} placeholder="Enter weight" className="w-full border rounded-lg bg-green-100 px-4 py-2 focus:outline-none focus:ring focus:ring-green-200"/>
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 text-sm mb-1">Collection Address</label>
            <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Enter pickup address" className="w-full border rounded-lg bg-green-100 px-4 py-2 focus:outline-none focus:ring focus:ring-green-200" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-1">Preferred Collection Date</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full border rounded-lg bg-green-100 px-4 py-2 focus:outline-none focus:ring focus:ring-green-200"/>
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-1">Waste Photo (optional)</label>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => fileRef.current.click()} className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition">Upload Image</button>
              <input type="file" accept="image/*" className="hidden" ref={fileRef} onChange={handleImage} />
              {image && <img src={image.url} alt={image.name} className="w-16 h-16 object-cover rounded border border-green-200" />}
            </div>
            {image && <div className="text-xs text-gray-700 mt-1">{image.name}</div>}
          </div>
        </div>
        <label className="block text-gray-700 text-sm mb-1">Additional Notes</label>
        <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Any special instructions..." className="w-full border rounded-lg bg-green-100 px-4 py-2 mb-4 focus:outline-none focus:ring focus:ring-green-200"/>
        <button type="submit" className="w-full py-3 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition">Register Waste</button>
      </form>
    </main>
  );
}