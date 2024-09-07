import Navbar from "./components/navbar";
import LeftSidebar from "./components/leftsidebar";
import RightSidebar from "./components/rightsidebar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className='w-full flex h-svh max-h-svh bg-white'>
      
      <LeftSidebar/>
     
      {/*Main Content Area */}
      <div className="h-full flex-1">
        <div className=" flex h-full flex-col justify-start">


          <Navbar/>

          {/* Center */}
          <div className="text-xl text-black py-4 px-2">
            <h1>Home Page</h1>

            
          </div>


          <Footer/>

        </div>
      </div>
      
        <RightSidebar/>
    
    </div>
  );
}
