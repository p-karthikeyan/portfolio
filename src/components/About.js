import React from "react";

const About = () => {
  return (
    <div className="bg-[#0c1626]" id="about">
      <div className="pt-10">
        <p className="text-white w-fit mx-auto py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
          About me
        </p>
      </div>
      <div className="flex">
        <div className="p-5 md:p-10 lg:p-20 text-white">
          <h2 className="lg:text-2xl text-xl font-bold">
            Curious about me? Here you have it:
          </h2>
          <div className="text-gray-500 leading-6">
            <p className="mt-5">
            Hello! I'm Karthikeyan, a final-year Computer Science student at Adhiyamaan College of Engineering in Hosur. I was born and raised in Tirunelveli, where I also completed my schooling. Since joining engineering, my enthusiasm for IT has grown, leading me to explore and learn various skills to enhance my professional abilities. I am genuinely eager to further my career by gaining valuable experience in the IT industry.
            </p>
            <br></br>
            <div className="lg:flex lg:gap-10 flex lg:flex-row flex-col gap-5">
              {/* education */}
              <div className="lg:w-3/5">
                <p className="text-2xl py-4 text-white font-bold">Education</p>
                <div className="border-solid border-l-2 border-b-2 border-gray-500 ml-4 mt-4">
                  <div className="flex">
                  <p className="min-w-fit h-fit text-white rounded-3xl border-solid border-2 border-sky-500 px-2 py-1 inline-block -translate-x-4 bg-[#1d262e]">
                    2020-2024
                  </p>
                  <p className="pt-1">Adhiyamaan College of Engineering, Hosur</p>
                  </div>
                  <p className="text-white text-l pt-5 px-5">
                    B.E Computer Science and Engineering
                  </p>
                  <p className="py-2 px-5">
                    Affiliated to Anna University, I was able to explore various
                    opportunities particularly outside syllabus, that was the
                    mark of my beginning into IT field.
                  </p>
                </div>
                <div className=" border-t-0 border-solid border-l-2 border-gray-500 ml-4">
                  <div className="pt-5">
                    <div className="flex">
                       <p className="min-w-fit h-fit text-white rounded-3xl border-solid border-2 border-sky-500 px-2 py-1 inline-block -translate-x-4 bg-[#1d262e]">
                           2019-2020
                       </p>
                       <p className="pt-1">Boo Vijesh Matric Hr. Sec. School, Tirunelveli</p>
                  </div>
                    <p className="text-white  text-l pt-5 px-5">
                      Higher Secondary
                    </p>
                    <p className="py-2 px-5">
                      
I completed my higher secondary education at this institution. Despite being a math-bio major, my keen interest in computer science has led me to actively pursue additional learning opportunities.
                    </p>
                  </div>
                </div>
              </div>
              {/* what i do */}
              <div className="lg:w-2/5">
                <h3 className="text-2xl py-4 text-white font-bold">
                  What I Do
                </h3>
                <div className="flex flex-col">
                  <div className="flex gap-10 mt-4">
                    <div className="text-sky-500 text-5xl">
                      <i class="bi bi-display"></i>
                    </div>
                    <div>
                      <p className="text-white  text-l font-bold px-5">
                        Web App Development
                      </p>
                      <p className="px-5 py-1">
                      Proficient web app developer skilled in MERN and Python stacks, showcased in diverse project implementations.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-10 mt-5">
                    <div className="text-sky-500 text-5xl">
                      <i class="bi bi-database-check"></i>
                    </div>
                    <div>
                      <p className="text-white  text-l font-bold px-5">
                        Database Administration
                      </p>
                      <p className="px-5 py-1">
                      Capable database administrator with expertise in SQL, MySQL, MongoDB, demonstrated through diverse project experiences.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-10 mt-5">
                    <div className="text-sky-500 text-5xl">
                      <i class="bi bi-phone"></i>
                    </div>
                    <div>
                      <p className="text-white  text-l font-bold px-5">
                      Mobile App Development
                      </p>
                      <p className="px-5 py-1">
                      Adept in mobile application development, making mobile apps using Flutter, which is a versatile framework that enables to create cross-platform applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
