import React from "react";
import Header from "../Comp/Header";
import Footer from "../Comp/Footer";
import Carousel from "../Comp/Carousel";
import "../css/cardPage.css";

const CardPage = () => {
  return (
    <>
      <Header links={true} bg="glass-effect" />
      <div className="my-[300px]">
        <div className="flex m-auto w-[1250px]">
          <div className="w-[450px] bg-gray-50 border-black border-[1px] rounded-[10px] mr-[10px] h-[650px] p-[10px] pl-[20px] overflow-y-auto scrollbar-custom">
            <h1 className="text-[30px] text-center">The Ritz Paris</h1>
            <p className="text-[17px] mt-[50px] ">
              <span className="font-bold">Location:</span> 15 Place Vendôme,
              75001 Paris, France
            </p>
            {/* //TODO: Unorder list of the Accommodations of the hotel */}
            <ul className="mt-[40px]">
              <h2 className="font-bold">Accommodations</h2>
              <li>
                <span className="font-semibold">Rooms:</span> The hotel offers a
                range of luxurious rooms and suites, including the Ritz Paris
                Suite and the Coco Chanel Suite. Each room is elegantly
                decorated with a focus on comfort and sophistication.
              </li>
              <li className="mt-[7px]">
                <span className="font-semibold">Features:</span> Rooms at The
                Ritz Paris come with high-end amenities, including plush
                bedding, marble bathrooms, and personalized service.
              </li>
            </ul>
            {/* //TODO: Order list of the estaurants of the hotel */}
            <ol className="mt-[20px]">
              <h2 className="font-bold mb-[10px]">Restaurants</h2>
              <li className="mt-[7px]">
                <span className="font-semibold">L'Espadon:</span>
                The hotel's Michelin-starred restaurant, known for its fine
                dining and exquisite French cuisine.
              </li>
              <li className="mt-[7px]">
                <span className="font-semibold">Bar Hemingway:</span>
                An iconic bar named after the famous author Ernest Hemingway,
                known for its classic cocktails and cozy atmosphere.
              </li>
              <li className="mt-[7px]">
                <span className="font-semibold">The Ritz Bar:</span>
                Offers a more relaxed setting with a selection of drinks and
                light meals.
              </li>
            </ol>
            <ol className="mt-[20px]">
              <h2 className="font-bold mb-[10px]">Restaurants</h2>
              <li className="mt-[7px]">
                <span className="font-semibold">L'Espadon:</span>
                The hotel's Michelin-starred restaurant, known for its fine
                dining and exquisite French cuisine.
              </li>
              <li className="mt-[7px]">
                <span className="font-semibold">Bar Hemingway:</span>
                An iconic bar named after the famous author Ernest Hemingway,
                known for its classic cocktails and cozy atmosphere.
              </li>
              <li className="mt-[7px]">
                <span className="font-semibold">The Ritz Bar:</span>
                Offers a more relaxed setting with a selection of drinks and
                light meals.
              </li>
            </ol>
          </div>
          <div>
            <Carousel />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CardPage;
