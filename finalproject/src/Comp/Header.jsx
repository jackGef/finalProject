import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    const func=(links)=>{
        if(links){
            return <nav className='flex justify-center items-center gap-2 text-lg'>
                <NavLink to="/Flights">Flights</NavLink>
                <NavLink to="/Places">Places</NavLink>
            </nav>
        }
    }
    return (
        <header className={`${props.bg} container flex justify-between min-w-full`}>
            <div>
                <img src="../images/logoCanva.png" alt="logo" className='max-w-[200px] min-w-[200px] max-h-[150px]' />
            </div>
            {func(props.links)}
            <div className='self-center mr-[100px]'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign up</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">Log in</button>
            </div>
        </header>
    )
}

export default Header