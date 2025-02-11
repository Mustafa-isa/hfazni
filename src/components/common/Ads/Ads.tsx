import React, { useState } from "react";
import Modal from "react-modal";

interface Advertisement {
  id: number;
  advertisementsPlace: string;
  advertisementsName: string;
  description: string;
  images: string[];
  createdAt: string;
}

interface AdvertisementsProps {
  data: Advertisement[];
}

const Advertisements: React.FC<AdvertisementsProps> = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      {data.map((ad) => (
        <div
          key={ad.id}
          className="relative bg-white shadow-lg rounded-lg p-6 w-full "
        >
          <div
            className="absolute inset-0 bg-cover bg-center rounded-lg opacity-20"
            style={{ backgroundImage: `url(${ad.images[0]})` }}
          ></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-3 text-center">
              {ad.advertisementsName}
            </h3>
            <p className="text-sm text-gray-600 mb-4 text-center">
              {ad.description}
            </p>
            <div className="flex justify-center gap-4 mb-4">
              {ad.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Advertisement ${ad.id}`}
                  className="w-40 h-40 object-cover cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  onClick={() => openModal(image)}
                />
              ))}
            </div>
            <p className="text-xs text-gray-500 text-center">
              Created at: {new Date(ad.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="flex justify-center items-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[10000]"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl">
          <img src={selectedImage} alt="Selected" className="max-w-full h-auto mb-4" />
          <button
            onClick={closeModal}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Advertisements;