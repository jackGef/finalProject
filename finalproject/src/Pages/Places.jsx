import React, { useState } from 'react';
import CardBuilder from '../Comp/CardBuilder';
import placeArr from '../placeArr.json';
import Header from '../Comp/Header';
import Footer from '../Comp/Footer';

const Places = () => {
  const [inputValue, setInput] = useState("");
  const [select, setSelect] = useState("");
  const [array, setArray] = useState([]);

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const send = (e) => {
    e.preventDefault();
  };

  const filterCards = () => {
    const arr = placeArr.filter((item) => {

    });
  };

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => setter(value > 0 ? value - 1 : 0);

  return (
    <div>
      <Header links={true}/>
      <div className='text-center mt-3  w-[700px] m-auto'>
        <h1>Search for a place to stay</h1>
        <form className='mt-3' onSubmit={e => send(e)}>
          <input type="text" placeholder='Search for your place' className='border border-black ' onChange={(event) => setInput(event.target.value)} />

          <div className='relative inline-block ml-3'>
            <button type="button" className='border border-black px-4 py-2 bg-white' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Choose amount</button>

            {isDropdownOpen && (
              <div className='absolute mt-2 w-64 p-4 bg-white shadow-md rounded-lg z-10'>
                <div className='flex justify-between items-center mb-2'>
                  <span>Adults</span>
                  <div className='flex items-center'>
                    <button type='button' className='px-2 py-1 bg-gray-200 rounded-l' onClick={() => decrement(setAdults, adults)}>-</button>
                    <span className='px-4'>{adults}</span>
                    <button type='button' className='px-2 py-1 bg-gray-200 rounded-r' onClick={() => increment(setAdults, adults)}>
                      + </button>
                  </div>
                </div>
                <div className='flex justify-between items-center mb-2'>
                  <span>Children</span>
                  <div className='flex items-center'>
                    <button type='button' className='px-2 py-1 bg-gray-200 rounded-l' onClick={() => decrement(setChildren, children)}>
                      - </button>
                    <span className='px-4'>{children}</span>
                    <button type='button' className='px-2 py-1 bg-gray-200 rounded-r' onClick={() => increment(setChildren, children)}>
                      + </button>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <span>Rooms</span>
                  <div className='flex items-center'>
                    <button type='button' className='px-2 py-1 bg-gray-200 rounded-l' onClick={() => decrement(setRooms, rooms)}>
                      - </button>
                    <span className='px-4'>{rooms}</span>
                    <button type='button' className='px-2 py-1 bg-gray-200 rounded-r' onClick={() => increment(setRooms, rooms)}>
                      + </button>
                  </div>
                </div>
                <button type='button' className='mt-2 w-full bg-blue-500 text-white py-2 rounded' onClick={() => setIsDropdownOpen(false)}>
                  Done </button>
              </div>
            )}

          </div>

          <button className="bg-green-700 text-white p-1 rounded mt-3 ml-3">Search</button>
        </form>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Places;
