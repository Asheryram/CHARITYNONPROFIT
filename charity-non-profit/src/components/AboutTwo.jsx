import ObjectiveImage2 from '../assets/About2.png'
import ObjectiveImage2_1 from '../assets/About2_1.png'


function ObjectivesTwo() {
  return (
    <div className="flex flex-col md:flex-row p-auto my-10">
      {/* Left Column (Text) */}
      <div className="w-full md:w-3/4 flex flex-col justify-center">
        <h2 className="text-3xl w-full md:w-3/4 font-bold mb-4 text-justify">
          AtomBank for the Future
        </h2>
        <span className="text-lg text-justify">
          All conveniences are at hand. It&apos;s time to go ahead and make dreams
          <p className="text-lg text-justify">
            come true one by one. Open, manage and withdraw competitive interest
            savings
          </p>
          <p className="text-lg text-justify">without going to the bank.</p>
        </span>
        <span className="text-green-300">
          <a href="#" className="pl-16 underline">
            Learn More
          </a>
          &rarr;
        </span>
      </div>

      {/* Right Column (Image) */}
      <div className="w-full md:w-1/4 relative mt-6 md:mt-0">
        <img
          src={ObjectiveImage2}
          alt="Image"
          className="w-full h-auto md:w-auto"
        />
        <div className="lg:absolute top-[73%] left-[-80px]">
        <img
          src={ObjectiveImage2_1}
          alt="Image"
          className="w-full h-auto md:w-auto"
        />
        </div>
      </div>
    </div>
  );
}

export default ObjectivesTwo;
