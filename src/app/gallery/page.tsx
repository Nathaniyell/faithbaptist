"use client"
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { galleryImages } from "@/components/gallery/GalleryGrid";



const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData | null>(null);
  const [loading, setLoading] = useState(true);

  const openModal = (image: string | StaticImageData) => {
    setSelectedImage(image);
    setLoading(true); //Reset loading when opening the modal
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div>
      <h1 className="text-4xl font-semibold p-10 text-center bg-rose-200">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-48 cursor-pointer"
            onClick={() => openModal(image)}
          >
            <Image
              src={image}
              alt={`Gallery Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
           <div className="relative p-4 rounded-lg shadow-lg max-w-full max-h-full bg-[#eee]">
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-white bg-red-600 rounded-full h-8 w-8 flex items-center justify-center"
      >
        ✕
      </button>

            {/* Loading Spinner */}
            {loading && (
              <div className="flex items-center justify-center w-full h-full">
                <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent border-solid rounded-full animate-spin"></div>
              </div>
            )}

            {/* Full Image */}
            <div className="flex flex-col items-center">
            <div className={`${loading ? "hidden" : "block"} relative w-[80vw] h-[60vh]`}>
              <Image
                src={selectedImage}
                alt="Selected Image"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
                onLoadingComplete={() => setLoading(false)}
              />
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-2 mt-4 overflow-x-auto items-center justify-center">
              {galleryImages.map((thumb, index) => (
                <div
                  key={index}
                  className={`relative w-20 h-20 rounded-lg cursor-pointer ${
                    thumb === selectedImage ? "border-2 border-green-500" : ""
                  }`}
                  onClick={() => {
                    if (thumb !== selectedImage) {
                      setLoading(true); // Trigger loading only if a different image is selected
                      openModal(thumb);
                    }
                  }}
                >
                  <Image
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
