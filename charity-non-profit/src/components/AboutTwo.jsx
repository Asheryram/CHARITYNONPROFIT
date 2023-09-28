import About2 from "../assets/About2.svg";
import MissionCard from './MissionCard';
import missionImg from '../assets/Mission.svg'
import vissionImg from '../assets/Vission.svg'

function AboutTwo() {
  return (
    <div className="flex flex-row md:flex-row p-auto my-20 mx-3 ">
      {/* Left Column (Image) */}

      <div className="w-full md:w-2/4 flex flex-col justify-center md:ml-4 md:mr-4">
        <h2 className=" w-full md:w-3/4 font-medium mb-4 text-start">
          Welcome to Charity
        </h2>
        <p className="text-5xl font-bold text-justify">
          Let Us Come Together To Make a Difference{" "}
        </p>
        <p className=" font-thin text-justify">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo.
        </p>
        <div className="flex space-x-5  my-3">
            <MissionCard  
            img={missionImg}
            title= 'Our Mission'
            info='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
            />
            <MissionCard  
            img={vissionImg}
            title= 'Our Vission'
            info='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
            />
        </div>
      </div>

      {/* Right Column (Text) */}
      <div className="w-full md:w-1/2 md:relative px-28 ">
        <div className="   p-2 bg-green-200/50 md:w-[60%] md:absolute md:top-[70%] md:left-[65%] md:-translate-y-1/2 md:-translate-x-1/2 backdrop-opacity-0">
          <div className="bg-white w-full h-auto">
            <ul className="list-disc list-inside text-sm space-y-4 p-1">
              <li className="text-green-400">
                Together, we&apos;re going to make the future
              </li>
              <li>Children where we are able to fulfill all</li>
              <li>Their requirements to keep them safe from withered world</li>
              <li>We have already stepped out and start changing the world</li>
              <li>Keeping safe them from war, inhumanity</li>
            </ul>
          </div>
        </div>     
        <img
          src={About2}
          alt="Image"
          className="w-[70%] h-[70%] md:w-auto bg-green-200/50 p-2  "
        />
        
      </div>
    </div>
  );
}

export default AboutTwo;
