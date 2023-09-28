import AboutCard from "./AboutCard";

function Testimonial() {
  return (
    <div className="mx-40 my-10">
      <p className="text-green-300">Testimonial</p>
      <div className="space-x-[60%] flex">
        <h2 className="text-2xl w-72 font-semibold">
          What People Say About Us
        </h2>
        <div className="bg-green-300 w-6 h-6 rounded-tr-xl text-center">Hi</div>
      </div>
      <div className="md:flex space-x-8">
        <AboutCard />
      </div>
    </div>
  );
}

export default Testimonial;
