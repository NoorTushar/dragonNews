import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
   return (
      <div className="text-center py-10">
         <img className="mx-auto" src={logo} alt="dragon-news"></img>
         <p className="text-dark03 text-lg mt-5 mb-3">
            Journalism Without Fear or Favor
         </p>
         <p className="font-medium text-xl">
            {moment().format("dddd, MMMM D, YYYY")}
         </p>
      </div>
   );
};

export default Header;
