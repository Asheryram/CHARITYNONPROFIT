
import { Button } from '@material-tailwind/react';

const  Footer =()=> {
  return (
    <footer className="relative w-full bg-black">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4 text-white">
          <div>
            <p className="font-semibold">Address</p>
            <p>
              A-272, Surajmal Vihar, Delhi, 11009281-8181-0860
             <span className="underline"> contact@vivekguptafoundation.in</span>
            </p>
          </div>
          <div>
            <p className="font-semibold">Get in Touch</p>
            <p>Contact Us</p>
            <p>Our Services</p>
          </div>
          <div className="md:col-span-2 space-y-4">
            <p className="font-semibold">Newsletter</p>
            <div className="flex">
            <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-none border-0 bg-white/5 px-3.5 py-2 h-20 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <Button
                type="submit"
                className="flex-none h-12 capitalize rounded-none bg-green-800  py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </Button>
            </div>
                <p>Your email is safe with us,we don’t spam.</p>
                <p>Follow Me</p>
                <div>
                    
                </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between"></div>
      </div>
    </footer>
  );
}


export default Footer;