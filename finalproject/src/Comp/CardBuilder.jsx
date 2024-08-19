import React from 'react';

const CardBuilder = (props) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img className={`object-cover ${props.mainCardPage? `ml-auto mr-[10px]` : ``} `} src={props.imageUrl} alt={props.place} />
            <div>
                {props.imageCarousel}
            </div>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{props.place}</h2>
                <p className="text-gray-700">{props.description}</p>
                {props.isButton? <button className='border bg-green-500 hover:bg-green-600 text-white p-2 rounded w-20' onClick={()=>alert("Coming soon")}>Details</button>: <div></div>}
            </div>
        </div>
    );
};

export default CardBuilder;
