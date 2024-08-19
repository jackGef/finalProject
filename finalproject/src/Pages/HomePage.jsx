import React from 'react'
import Header from '../Comp/Header'
import ThreeCards from '../Comp/ThreeCards'
import Footer from '../Comp/Footer'
import CardPage from './CardPage'
import "../css/cardPage.css";

const HomePage = () => {
    return (
        <div className="home-page-image  ">
            {/* <Header bg={"bg-"} />
            <main className='mb-[250px]'>
                <div className='text-center w-[700px] m-auto mb-[550px]'>
                    <h1 className='text-3xl font-semibold'>Discover Your Next Adventure with Us</h1>
                    <p className='mt-4 text-2xl'>Embark on unforgettable journeys and explore stunning destinations around the globe. Whether you’re seeking relaxation, adventure, or cultural experiences, our curated travel packages and expert recommendations are designed to make your dream getaway a reality. Start your adventure today and create memories that will last a lifetime!</p>
                </div>

                <div className='container flex flex-wrap justify-evenly mb-3 m-auto'>
                <ThreeCards name={"Flights"} bg={"home-plane-img"} message={"Book your flight now"} link={"/Flights"} />
                <ThreeCards name={"Places"} bg={"home-places-img p-[10px]"} message={"Order your place now"} link={"/Places"} />
            </div>
            </main>
            
            <Footer /> */}
            <CardPage/>
            
        </div>
    )
}

export default HomePage