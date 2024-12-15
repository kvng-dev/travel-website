import Link from "next/link";
import { FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto items-start grid-cols-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Company</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            About Us
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Careers
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Blogs
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Gift Cards
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Magazine
          </p>
        </div>
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Support</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Contact
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Legal Notice
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Privacy Policy
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Terms & Condition
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            SiteMap
          </p>
        </div>
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Other Services</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Car Hire
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Activity Finder
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Tour List
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Flight Finder
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Travel Agents
          </p>
        </div>
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">Mobile:</h1>
            <h1 className="text-base font-bold text-blue-950 mt-1">
              {" "}
              +234-903-359-4619
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">Email:</h1>
            <h1 className="text-base font-bold text-blue-950 mt-1">
              {" "}
              tripi@example.com
            </h1>
          </div>
        </div>
      </div>
      <div className="flex border-t-2 w-[80%] mx-auto border-gray-200 flex-wrap items-center justify-between py-5 text-sm text-gray-800 mt-8">
        <p className="mt-2 md:mt-0">&copy; 2024 Tripi. All Rights Reserved.</p>
        <div className="flex items-center justify-center space-x-2 mt-4 md:mt-0">
          <span>Social : </span>
          <Link href="#">
            <FaTwitter className="text-gray-500 hover:text-gray-800" />
          </Link>
          <Link href="#">
            <FaFacebook className="text-gray-500 hover:text-gray-800" />
          </Link>
          <Link href="#">
            <FaDribbble className="text-gray-500 hover:text-gray-800" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
