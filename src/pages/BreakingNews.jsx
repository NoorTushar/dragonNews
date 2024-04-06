import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
   return (
      <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl">
         <button className="btn btn-error w-28 bg-[#D72050] border-[#D72050] text-white">
            Latest
         </button>
         <Marquee pauseOnHover={true} speed={100}>
            <Link className="mr-6" to={`/`}>
               I can be a React component, multiple React components, or just
               some text.
            </Link>

            <Link className="mr-6" to={`/`}>
               I can be a React component, multiple React components, or just
               some text.
            </Link>

            <Link className="mr-6" to={`/`}>
               I can be a React component, multiple React components, or just
               some text.
            </Link>
         </Marquee>
      </div>
   );
};

export default BreakingNews;
