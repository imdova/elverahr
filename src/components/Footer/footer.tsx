import Link from "next/link";
import InputFild from "../InputFild";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-secondary py-11">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-center items-center p-4">
          <div className="flex flex-col items-center">
            <h2 className="relative text-white text-2xl  md:text-4xl max-w-[600px] text-center mb-10 font-bold">
              Please Ask Qustions Or Conatct The Contacts Below
            </h2>
            <InputFild />
          </div>
        </div>
        {/* Grid */}
        <div className="relative grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
          {/* Col 1 */}
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg text-white font-bold  mb-7">Product</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <Link
                  href="javascript:;"
                  className="text-white hover:text-orange-primary">
                  Digital MArkting
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="javascript:;"
                  className=" text-white hover:text-orange-primary">
                  Brand Design
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="javascript:;"
                  className=" text-white hover:text-orange-primary">
                  Social Media
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="javascript:;"
                  className=" text-white hover:text-orange-primary">
                  UI UX Design
                </Link>
              </li>
            </ul>
          </div>
          {/* Col 2 */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-white font-bold mb-7">Service</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <Link
                  href="javascript:;"
                  className="text-white hover:text-orange-primary">
                  Portfolio
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="javascript:;"
                  className=" text-white hover:text-orange-primary">
                  Blog
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="javascript:;"
                  className=" text-white hover:text-orange-primary">
                  Solution
                </Link>
              </li>
            </ul>
          </div>
          {/*Col 3 */}
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg text-white font-bold  mb-7">Company</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <Link
                  href="javascript:;"
                  className="text-white hover:text-orange-primary">
                  About
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="javascript:;"
                  className=" text-white hover:text-orange-primary">
                  Bootcamp
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="javascript:;"
                  className=" text-white hover:text-orange-primary">
                  Contact
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="javascript:;"
                  className=" text-white hover:text-orange-primary">
                  Help
                </Link>
              </li>
            </ul>
          </div>
          {/* End Col */}
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg text-white font-bold  mb-7">Company</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="flex items-center gap-3 mb-6">
                <div className="w-12">
                  <div className="flex justify-center items-center w-12 h-12 bg-white text-primary rounded-full">
                    <Mail size={18} />
                  </div>
                </div>
                <span className="text-white">info@innovate.com</span>
              </li>
              <li className="flex gap-3 items-center mb-6">
                <div className="w-12">
                  <div className="flex justify-center items-center w-12 h-12 bg-white text-primary rounded-full">
                    <Phone size={18} />
                  </div>
                </div>
                <span className="text-white">+201200987623</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
