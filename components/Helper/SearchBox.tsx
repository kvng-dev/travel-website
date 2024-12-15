import { FaCalendarWeek, FaMap, FaUserFriends } from "react-icons/fa";
const SearchBox = () => {
  return (
    <div className="bg-white rounded-lg py-8 px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]">
      <div className="flex items-center space-x-6">
        <FaMap className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Location</p>
          <input
            type="text"
            placeholder="Where are you going"
            className="outline-none text-gray-800"
          />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <FaCalendarWeek className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Start Date</p>
          <input type="date" className="outline-none border-none" />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <FaCalendarWeek className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">End Date</p>
          <input type="date" className="outline-none border-none" />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <FaUserFriends className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Guest</p>
          <input
            type="number"
            className="outline-none border-none"
            placeholder="1 Guest 1 Room"
          />
        </div>
      </div>
    </div>
  );
};
export default SearchBox;