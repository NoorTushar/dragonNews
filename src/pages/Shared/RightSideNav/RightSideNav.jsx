import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
   return (
      <div>
         <div className=" space-y-3 mb-5">
            <h3 className="text-xl font-semibold">Login With</h3>
            <button className="btn btn-outline w-full">
               <FcGoogle className="text-xl"></FcGoogle> GOOGLE
            </button>

            <button className="btn btn-outline w-full">
               <FaGithub className="text-xl"></FaGithub> GITHUB
            </button>
         </div>

         <div className="mb-5">
            <h3 className="text-xl font-semibold mb-3">Find Us On</h3>
            <a
               href=""
               className="flex items-center gap-4 border rounded-t-lg p-4"
            >
               <FaFacebookF></FaFacebookF>Facebook
            </a>

            <a href="" className="flex items-center gap-4 border-x p-4">
               <BsTwitterX></BsTwitterX>Twitter X
            </a>

            <a
               href=""
               className="flex items-center gap-4 border rounded-b-lg p-4"
            >
               <FaInstagram></FaInstagram>Instagram
            </a>
         </div>

         <div className="mb-5 ">
            <div className="bg-gray-100 p-4  rounded-lg">
               <h3 className="text-xl font-semibold mb-3">Q-Zone</h3>
               <img src={qZone1} alt="" />
               <img src={qZone2} alt="" />
               <img src={qZone3} alt="" />
            </div>
         </div>
      </div>
   );
};

export default RightSideNav;
