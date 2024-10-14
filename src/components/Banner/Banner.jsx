import React from 'react'
import satelightimg from "../../assets/satelite1.jpg"

const Banner = () => {
    return (
        <div>
            <div className="bg-black text-white  pb-12 relative z-50">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center  pt-5">
                    <div>
                        <img data-aos="zoom-in" src={satelightimg} alt="" className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"/>
                    </div>
                    <div  className='space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800'>
                        <p  data-aos="fade-up"  data-aos-delay="300" className='text-sky-800 uppercase'>
                            Our Mission 
                        </p>
                        <h1  data-aos="fade-up"  data-aos-delay="300" className='uppercase first-line:text-5xl'> Rapid cast</h1>
                        <p data-aos="fade-up"  data-aos-delay="500">
                           Fugiat assumenda laudantium, dolor veritatis similique eligendi. Praesentium, natus sequi error ipsum dolore labore laborum!
                            Veritatis dignissimos pariatur id dolorum. A unde provident molestias doloribus consectetur, asperiores molestiae necessitatibus officiis nobis alias nisi aspernatur repellendus at incidunt enim officia quasi cum, error vitae inventore voluptatem. 
                            culpa vero incidunt maiores. Nisi voluptatem quam quae  Hic, necessitatibus in perferendis reiciendis fuga odit voluptates suscipit rem quis impedit.
                        </p>
                        <button data-aos="fade-up"  data-aos-delay="700" className='primary-button '> learn More</button>

                    </div>

                    </div>
                   
                </div>

            </div>

        </div>
    )
}

export default Banner
