import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router";
import { removeAuthToken } from "../../../utils/authUtils";
interface userDataTypes {
  id: string;
  name: string;
  role: string;
}
const ProfileDropdown: React.FC<{ userData: userDataTypes }> = ({
  userData,
}) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    removeAuthToken();
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="absolute right-0 mt-[2.938rem] w-[21.625rem] shadow-md bg-white rounded-lg  pt-[2.438rem]  pb-[1.563rem] pl-8 pe-[1.813rem]   z-50"
    >
      <div className="flex  gap-[0.75rem] items-center">
        <img
          src="/assets/images/profileImage.png"
          alt="Profile"
          className="w-[5.5rem] h-[5.5rem] rounded-full"
        />
        <h3 className="font-bold text-[2.063rem] ">Tripbez</h3>
      </div>
      <hr className="mt-[2.188rem] mb-[1.688rem] text-black_1" />
      <p className="font-semibold  text-[1.375rem]">Your Account Manager</p>
      <div className="mt-[1.313rem] text-base space-y-[1.688rem]">
        <div className="flex items-center gap-[0.684rem]">
          <FaUser className="text-primary text-xl" />
          {userData.name}
        </div>
        <div className="flex items-center gap-[0.684rem]">
          <FiPhone className="text-primary text-xl fill-primary" />
          +1 (212) 555-1234
        </div>
        <div className="flex items-center gap-[0.684rem]">
          <FiMail className="text-white text-xl fill-primary" />
          {userData.id}
        </div>
      </div>
      <button
        className="mt-[2.75rem] w-full text-[#FB3F36] font-medium flex items-center gap-[0.684rem]   "
        onClick={handleLogout}
      >
        <IoMdLogOut className="text-[#FB3F36]" />
        <span className="text-base font medium">Log Out</span>
      </button>
    </motion.div>
  );
};

export default ProfileDropdown;
