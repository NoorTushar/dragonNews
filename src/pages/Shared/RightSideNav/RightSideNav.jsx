import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const RightSideNav = () => {
   return (
      <div>
         <div className="p-4 space-y-3 mb-6">
            <h3 className="text-xl font-semibold">Login With</h3>
            <button className="btn btn-outline w-full">
               <FcGoogle className="text-xl"></FcGoogle> GOOGLE
            </button>

            <button className="btn btn-outline w-full">
               <FaGithub className="text-xl"></FaGithub> GITHUB
            </button>
         </div>

         <div className="p-4 mb-6">
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
      </div>
   );
};

export default RightSideNav;
