import React from 'react'
import neulancers from '../assets/neulancers.jpg'
import azureskynet from '../assets/azureskynet.png'

const Experience = () => {
  return (
    <div className='p-5 flex flex-col bg-[#0c1626]' id="experience">
        <div className='pt-10'>
            <h3 className='text-white w-fit mx-auto py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>Experience</h3>
        </div>
        <p className='py-6 lg:w-1/2 mx-auto text-gray-600 text-center'>Navigated through enriching internships, gaining hands-on experience across diverse projects, contributing significantly to my multifaceted skill set. </p>
            {/* exp 1 */}
            <div className='lg:flex lg:justify-between mx-auto my-4 bg-[#000015] rounded-md w-5/6 lg:w-1/2'>
                <div className='flex justify-between'>
                <div className='p-5 pb-0'>
                <img className='w-[100px] rounded-lg' src={neulancers} />
                </div>
                <div className='lg:hidden text-gray-400 pt-5 pr-4 text-xs'>
                    <h3>Jun 2023 -  Sep 2023</h3>
                </div>
                </div>
                <div className='flex flex-wrap flex-col lg:p-4 p-4 lg:w-1/2'>
                    <h3 className='text-xl text-white font-bold'>Frontend Developer Intern</h3>
                    <ul className='list-disc text-gray-400 py-4 pl-4'>                
                        <li>We collaborated as a team of four on a project, developing the front-end pages based on Figma templates provided by our UI/UX developer.</li>
                        <li>Our coordinated effort involved actively contributing to the project repository on GitLab.</li>
                        <li>This collaborative approach allowed us to seamlessly integrate our individual contributions and create a cohesive and well-designed front-end for the project.</li>
                    </ul>
                </div>
                <div className='hidden lg:block text-gray-400 lg:p-4 p-4'>
                    <h3>Jun 2023 -  Sep 2023</h3>
                </div>
            </div>

            {/* exp 2 */}
            <div className='lg:flex lg:justify-between mx-auto my-4 bg-[#000015] rounded-md w-5/6 lg:w-1/2'>
                <div className='flex justify-between'>
                <div className='p-5 pb-0'>
                <img className='w-[100px] rounded-lg' src={azureskynet} />
                </div>
                <div className='lg:hidden text-gray-400 pt-5 pr-4 text-xs'>
                    <h3>May 2023 -  Jun 2023</h3>
                </div>
                </div>
                <div className='flex flex-wrap flex-col lg:p-4 p-4 lg:w-1/2'>
                    <h3 className='text-xl text-white font-bold'>Project Intern</h3>
                    <ul className='list-disc text-gray-400 py-4 pl-4'>                
                    <li>I acquired proficiency in JavaScript for web development through practical experience gained in hands-on training sessions.
                    </li><li>Throughout the training, I successfully completed various tasks that not only reinforced my understanding of JavaScript but also ignited my curiosity to delve deeper into the MERN stack.</li>
                    </ul>
                </div>
                <div className='hidden lg:block text-gray-400 lg:p-4 p-4'>
                    <h3>May 2023 -  Jun 2023</h3>
                </div>
            </div>
        
    </div>
  )
}

export default Experience