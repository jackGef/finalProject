import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/cardPage.css";

const ThreeCards = (props) => {
    return (
        <div className='hover:transform hover:-translate-y-2 transition-transform duration-300 hover:cursor-pointer hover:text-white'>
            <div className='flex flex-col items-center'>
                <h1 className='text-3xl text-bold mb-2'>{props.name}</h1>
            </div>
            <NavLink to={props.link}>
                <div className='costume-shadow rounded-[20px] border-gray-200 border-[1px] w-[385px] h-[470px] group relative'>
                    <div className={`${props.bg} h-full bg-cover bg-center flex justify-center items-end text-black`}>
                        <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{props.message}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default ThreeCards;