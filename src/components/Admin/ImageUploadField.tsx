"use client";

import { useState } from "react";
import { uploadImage } from "@/utils/imageUpload";

interface ImageUploadProps {
  currentImage?: string;
  onImageChange: (url: string) => void;
  label?: string;
}

export const ImageUploadField = ({
  currentImage,
  onImageChange,
  label = "Image",
}: ImageUploadProps) => {
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadImage(file);
      onImageChange(url);
    } catch (error) {
      alert(`Upload failed: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="flex gap-4 items-end">
        <div className="flex-1">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={uploading}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        {uploading && <span className="text-sm text-blue-600">Uploading...</span>}
      </div>
      {currentImage && (
        <div className="mt-2">
          <img
            src={currentImage}
            alt="Preview"
            className="h-20 w-32 object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  );
};
