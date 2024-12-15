import { BsEnvelope } from "react-icons/bs";
const NewsLetter = () => {
  return (
    <div className="bg-black pt-16 pb-16 flex flex-col justify-center items-center w-full">
      <BsEnvelope className="w-16 h-16 mt-20 text-white" />
      <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest">
        Your Travel Journey Starts Here
      </h1>
      <p className="mt-3 text-white text-xs sm:text-sm">
        Sign up and we&apos;ll send you the best deals you can make
      </p>
      <div className="w-full">
        <input
          type="text"
          className="px-6 py-3.5 bg-white mt-8 w-[95%] sm:w-[80%] lg:w-[40%] block mx-auto rounded-lg outline-none"
          placeholder="Email"
        />
        <button className="px-6 py-3.5 bg-blue-900 hover:bg-blue-950 text-white transition-all duration-300 mt-8 w-[95%] sm:w-[80%] lg:w-[40%] block mx-auto rounded-lg outline-none">
          Subcribe
        </button>
      </div>
    </div>
  );
};
export default NewsLetter;
