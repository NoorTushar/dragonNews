import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const NewsCard = ({ eachNews }) => {
   const { _id, title, image_url, details } = eachNews;
   return (
      <div className=" p-4 shadow-md">
         <div className="space-y-4">
            <div className="space-y-2">
               <img
                  src={image_url}
                  alt=""
                  className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
               />
               <div className="flex items-center text-xs">
                  <span>6 min ago</span>
               </div>
            </div>
            <div className="space-y-2">
               <Link className="block" to={`/news/${_id}`}>
                  <h3 className="text-xl font-bold ">{title}</h3>
               </Link>
               {details.length > 200 ? (
                  <p className="leading-snug text-dark03">
                     {details.slice(0, 200)}{" "}
                     <Link
                        to={`/news/${_id}`}
                        className="font-semibold underline text-blue-400"
                     >
                        Read More...
                     </Link>
                  </p>
               ) : (
                  <p className="leading-snug text-dark03">{details}</p>
               )}
            </div>
         </div>
      </div>
   );
};

NewsCard.propTypes = {
   eachNews: PropTypes.object.required,
};
export default NewsCard;
