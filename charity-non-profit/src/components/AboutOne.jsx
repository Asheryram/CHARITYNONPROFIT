import ObjectiveImage1 from "../assets/About1.png";
import psImage from '../assets/playstore.png'
import asImage from '../assets/appstore.png'
function ObjectivesOne() {
  return (
    <div className="flex flex-col md:flex-row p-auto my-10 justify-center">
      {/* Left Column (Image) */}
      <div className="w-full md:w-1/4">
        <img
          src={ObjectiveImage1}
          alt="Image"
          className="w-full h-auto md:w-auto"
        />
      </div>

      {/* Right Column (Text) */}
      <div className="w-full md:w-3/4 flex flex-col justify-center md:ml-4 md:mr-4">
        <h2 className="text-3xl w-full md:w-3/4 font-bold mb-4 text-justify">
          AtomBank App for Your Easy
        </h2>
        <p className="text-lg text-justify">
          The best place to transact and save money. More organized finances no
        </p>
        <p className="text-lg text-justify">
          {" "}
          longer a discourse. Enjoy the life you want, without wasting time on
        </p>
        <p className="text-lg text-justify">unnecessary financial matters</p>

        <div className="w-full md:w-1/4 flex">
        <img
          src={psImage}
          alt="Image"
          className="w-full h-auto md:w-auto"
        />
        <img
          src={asImage}
          alt="Image"
          className="w-full h-auto md:w-auto"
        />
      </div>
      </div>
    </div>
  );
}

export default ObjectivesOne;
