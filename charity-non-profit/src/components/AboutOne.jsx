import About1_1 from "../assets/About1_1.svg";
import About1_2 from "../assets/About1_2.svg";
import { Button } from '@material-tailwind/react';
function AboutOne() {
  return (
    <div className="flex flex-row md:flex-row p-auto my-20 mx-5  ">
      {/* Left Column (Image) */}
      <div className="w-full md:w-1/2 md:relative ">
        <img
          src={About1_2}
          alt="Image"
          className=" w-[70%] h-[70%] p-2 bg-green-200/50 md:w-auto md:absolute md:top-[75%] md:left-[65%] md:-translate-y-1/2 md:-translate-x-1/2 backdrop-opacity-0"
        />
        <img
          src={About1_1}
          alt="Image"
          className="w-[70%] h-[70%] md:w-auto bg-green-200/50 p-2  "
        />
      </div>

      {/* Right Column (Text) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center md:ml-4 md:mr-4">
        <h2 className=" w-full md:w-3/4 font-medium mb-4 text-justify">
          About Us
        </h2>
        <p className="text-5xl font-bold text-justify">
          Your Support is Really Powerful.
        </p>
        <p className="text-lg font-thin text-justify">
          The secret to happiness lies in helping others. Never underestimate
          the difference YOU can make in the lives of the poor, the abused and
          the helpless.
        </p>
        <div>
        <Button color="green" >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AboutOne;
