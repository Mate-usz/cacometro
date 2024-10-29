"use client";

import { useState } from "react";

export default function Dashboard() {
  const [image, setImage] = useState("/path/to/default/image.jpg"); // Default image path
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setImageFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    // Implement logout functionality (e.g., clear session)
    console.log("Logged out");
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <div className="flex items-center mb-4">
          <label className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-600">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <img
              src={image}
              alt="User"
              className="w-full h-full object-cover cursor-pointer"
            />
          </label>
        </div>
        <h2 className="text-lg font-semibold">User Dashboard</h2>
        <ul className="mt-4">
          <li>
            <a href="/profile" className="block py-2 hover:bg-gray-700">
              Profile
            </a>
          </li>
          <li>
            <a href="/settings" className="block py-2 hover:bg-gray-700">
              Settings
            </a>
          </li>
          <li>
            <a href="/help" className="block py-2 hover:bg-gray-700">
              Help
            </a>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="mt-4 w-full bg-red-600 py-2 text-white rounded hover:bg-red-500"
        >
          Log Out
        </button>
      </aside>
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold">Welcome to your dashboard!</h1>
        {/* Additional dashboard content goes here */}
      </main>
    </div>
  );
}
