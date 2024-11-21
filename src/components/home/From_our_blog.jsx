import React from 'react';
import img1 from '/photo1.jpg';
import img2 from '/photo2.jpg';
import img3 from '/photo3.jpg';
    
const From_our_blog = () => {
    return (
        <div>
            <div className='mt-16 mb-14'>
                <p className='text-black text-center'>From our blog</p>
                <div className="w-full flex mt-3 justify-center">
                    <p className=" border-b-2 border-gray-900 text-center w-12"> </p>
                </div>
                <div className='flex flex-col md:flex-row p-5 justify-center gap-7 mt-16'>
                    <div>
                        <div className="relative">
                            <img
                                src={img1}
                                alt="Description of image"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-7 text-white bg-black bg-opacity-50">
                                <div>
                                <h4 className="text-sm">Team inticure</h4>
                                <h4 className="text-sm">Jun 23, 2023 . 2 min</h4>
                                </div>
                                <div>
                                    <h1 className='text-3xl'>Empowering Tips for Women with PCOS</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img
                                src={img2}
                                alt="Description of image"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-7 text-white bg-black bg-opacity-50">
                                <div>
                                <h4 className="text-sm">Team inticure</h4>
                                <h4 className="text-sm">Jun 23, 2023 . 3 min</h4>
                                </div>
                                <div>
                                    <h1 className='text-3xl'>Are you sex positive?</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img
                                src={img3}
                                alt="Description of image"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-7 text-white bg-black bg-opacity-50">
                                <div>
                                <h4 className="text-sm">Team inticure</h4>
                                <h4 className="text-sm">Jun 23, 2023 . 4 min</h4>
                                </div>
                                <div>
                                    <h1 className='text-3xl'>Going from oh no, to OH YES!</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default From_our_blog
