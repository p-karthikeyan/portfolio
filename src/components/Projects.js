import React from 'react'
import touraround from '../assets/touraround.png'
import phishing from '../assets/phishing.png'
import ecom from '../assets/ecom.jpg'

const Projects = () => {
  return (
    <div className='p-5 md:p-10 lg:p-20' id="works">
        <div className='pb-8'>
            <p className='text-white w-fit mx-auto py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>Works</p>
        </div>
        <p className='pb-16 lg:w-1/2 mx-auto text-gray-600 text-center'>Explore a compilation of my impactful works and projects, each a testament to my dedication, innovation, and problem-solving prowess.</p>
        
        {/* proj 1 */}
        <div className='lg:w-5/6 p-5 mx-auto lg:flex'>
            <div className='lg:w-1/2 p-5 lg:p-10 rounded-t-lg lg:rounded-e-none lg:rounded-s-lg bg-[#3e4a61]'>
                <img className='h-[200px] lg:h-[300px] rounded-lg' src={touraround}/>
            </div>
            <div className='lg:w-1/2 bg-[#1c2636] rounded-b-lg lg:rounded-s-none lg:rounded-e-lg p-10 text-white'>
                <p className='font-bold text-lg pb-3'>Travel Blog</p>
                <p className='text-gray-400 pb-8'>This website enhance user to Experience the world through the eyes of fellow travelers on our dynamic
sharing website. Discover unique stories, tips, and recommendations from globetrotters worldwide</p>
                <div className='flex flex-wrap text-sm gap-2'>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>ReactJs</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>CSS3</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>NodeJs</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>ExpressJs</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>MongoDb</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>Mongoose</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>Javascript</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>JSON</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>Json web token</p>
                </div>
            </div>
        </div>

        {/* proj 2 */}
        <div className='lg:w-5/6 p-5 mx-auto lg:flex'>
            <div className='lg:w-1/2 p-5 lg:p-10 rounded-t-lg lg:rounded-e-none lg:rounded-s-lg bg-[#3e4a61]'>
                <img className='h-[200px] lg:h-[300px] rounded-lg' src={phishing}/>
            </div>
            <div className='lg:w-1/2 bg-[#1c2636] rounded-b-lg lg:rounded-s-none lg:rounded-e-lg p-10 text-white'>
                <p className='font-bold text-lg pb-3'>Phishing Detection</p>
                <p className='text-gray-400 pb-8'>Leveraging advanced algorithms and machine learning, it scans URLs in real-time, assessing their
legitimacy and assessing the risk of phishing attacks.</p>
                <div className='flex flex-wrap text-sm gap-2'>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>Python</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>Flask Framework</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>Machine Learning</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>Pandas</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>Numpy</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>SkLearn</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>Random Forest Algorithm</p>
                </div>
            </div>
        </div>

        {/* proj 3 */}
        <div className='lg:w-5/6 p-5 mx-auto lg:flex'>
            <div className='lg:w-1/2 p-5 lg:p-10 rounded-t-lg lg:rounded-e-none lg:rounded-s-lg bg-[#3e4a61]'>
                <img className='h-[200px] lg:h-[300px] rounded-lg' src={ecom}/>
            </div>
            <div className='lg:w-1/2 bg-[#1c2636] rounded-b-lg lg:rounded-s-none lg:rounded-e-lg p-10 text-white'>
                <p className='font-bold text-lg pb-3'>E-Commerce</p>
                <p className='text-gray-400 pb-8'>The e-commerce project is an online platform designed to facilitate electronic transactions, allowing users to browse, select, and purchase products or services.</p>
                <div className='flex flex-wrap text-sm gap-2'>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>ReactJs</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>TailwindCss</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>NodeJs</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>ExpressJs</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>MongoDb</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>Mongoose</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>Javascript</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>JSON</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>Json web token</p>
                <p className='text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>Rest API</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Projects