import About from "./components/About";
import Experience from "./components/Experience";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-[#000015] scroll-smooth">
    <Nav/>
    <Profile />
    <About/>
    <Skills />
    <Experience />
    <Projects/>
    <p className="p-5 lg:w-1/2 mx-auto text-gray-700 text-center">
  &copy; 2023 karthik. All Rights Reserved. This is the intellectual property of karthik and is protected by copyright laws. Unauthorized use, reproduction, or distribution without explicit permission is strictly prohibited.
</p>
          <div className='flex gap-10 pb-10 text-white w-fit mx-auto'>
             <a href="https://www.linkedin.com/in/karthi-keyan-cse" target="_blank" rel="noopener noreferrer" className='curser-pointer'><i class="bi bi-linkedin"></i></a>
             <a href="https://github.com/p-karthikeyan" target="_blank" rel="noopener noreferrer" className='curser-pointer'><i class="bi bi-github"></i></a>
             <a href="mailto:p.karthikeyan.ace@gmail.com" className='curser-pointer' target="_blank" rel="noopener noreferrer"><i class="bi bi-envelope-at-fill"></i></a>
           </div>

    </div>
  );
}

export default App;
