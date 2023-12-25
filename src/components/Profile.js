import React from 'react'
import photo from '../assets/dp.png'

const Profile = () => {
  return (
    <div className='text-white mx-5 md:mx-10 lg:mx-20 lg:py-10 flex flex-col-reverse lg:flex-row lg:gap-10 mt-20'>
      {/* welcome content */}
        <div className='py-10'>
           <div>
              <h1 className='lg:text-5xl text-3xl font-bold'>Hi, I'm <span className='text-blue-500'>Karthik</span>👋</h1>
              <p className='mt-5 lg:text-xl text-gray-500 '>A dedicated Computer Science enthusiast with a passion for programming and devlopment. </p>
           </div>
           <div className='mt-10 text-gray-500'>
             <p className='py-2'><i class="bi bi-geo-alt"></i> TamilNadu, India</p>
             <p ><i class="bi bi-circle-fill text-green-500 text-[10px] px-1" ></i> Available for new projects</p>
           </div>
           <div className='mt-10 flex gap-5'>
             <a href="https://www.linkedin.com/in/karthi-keyan-cse" target="_blank" rel="noopener noreferrer" className='curser-pointer'><i class="bi bi-linkedin"></i></a>
             <a href="https://github.com/p-karthikeyan" target="_blank" rel="noopener noreferrer" className='curser-pointer'><i class="bi bi-github"></i></a>
             <a href="mailto:p.karthikeyan.ace@gmail.com" className='curser-pointer' target="_blank" rel="noopener noreferrer"><i class="bi bi-envelope-at-fill"></i></a>
           </div>
        </div>
        {/* photo */}
        <div className='lg:my-auto lg:mr-[100px] mx-auto'>
          {/* <div className='bg-[#4e5a61] w-fit'> 
            <img className='w-[700px] translate-x-4 -translate-y-4' src={photo}/>
          </div> */}

          
          <div className='bg-blue-700 w-fit rounded-full p-2 '> 
            <img className='rounded-full lg:w-[280px] w-[250px] lg:h-[300px]' src={photo}/>
          </div>
        </div>
    </div>
  )
}

export default Profile