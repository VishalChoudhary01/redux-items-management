import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import Button from "../atoms/Button";
// const items = [
//   {
//     id: 1,
//     name: "Apple Watch",
//     type: "Electronics",
//     description: "A smart wearable device with multiple features",
//     coverImage: "/products/apple watch.jpg",
//     images: [
//       "/products/apple watch.jpg",
//       "/products/apple watch.jpg",
//       "/products/apple watch.jpg",
//     ],
//   },
// ];

const ViewItems = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const items=useSelector((state)=>state.items)

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    handleModalToggle();
  };

  const handleModalToggle = () => {
    setOpenModal((prev) => !prev);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedItem.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === selectedItem.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full px-6 py-10 ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        List of Items
      </h2>
      {/* <div className="flex gap-2.5 flex-wrap md:justify-start justify-center "> */}
      <div className="grid xl:grid-cols-8 lg:grid-cols-7 md:grid-cols-4 grid-cols-2 lg:gap-3.5 md:gap-3 gap-2   ">
        {items.map(item => (
          <div
            key={item.id}
            onClick={() => handleSelectItem(item)}
            className="bg-white w-[12rem] rounded-lg shadow hover:shadow-md cursor-pointer"
          >
            <img src={item.coverImage} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4 text-center">
              <p className="text-md font-medium text-gray-800 capitalize">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      {openModal && (
  <Modal handleModalToggle={handleModalToggle}>
    <div className="lg:w-[24rem] md:w-[20rem] w-[90%]">
      <h2 className="text-xl font-bold mb-2 font-Poppins">{selectedItem.name}</h2>
      <p className="md:text-[0.9rem]  font-Lato">
        <strong>Type:</strong> <span className="md:text-[0.85rem]">{selectedItem.type}</span> 
      </p>
      <p className="text-gray-600 mb-4 text-[0.88rem] mt-1">{selectedItem.description}</p>

<div className="flex items-center justify-center gap-4 mb-4">
  <button
    onClick={handlePrev}
    className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer"
  >
    <FaAnglesLeft />
  </button>

  <div className="w-40 h-40 overflow-hidden relative border border-gray-300 rounded">
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{
        transform: `translateX(-${currentIndex * 100}%)`,
      }}
    >
      {selectedItem.images.map((image, idx) => (
        <div
          key={idx}
          className="w-40 h-40 flex-shrink-0"
        >
          <img
            src={image}
            alt="carousel"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>

  <button
    onClick={handleNext}
    className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer"
  >
    <FaAnglesRight />
  </button>
</div>
<div className="w-full flex justify-end items-center">

      <Button children={"Equire"} />

</div>
      
    </div>
  </Modal>
)}

    </div>
  );
};

export default ViewItems;
