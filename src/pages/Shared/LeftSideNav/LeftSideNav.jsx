import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      fetch("/public/categories.json")
         .then((res) => res.json())
         .then((data) => setCategories(data));
   }, []);

   console.log(categories);
   return (
      <div>
         <div className="">
            <h3 className="text-xl font-semibold mb-3">All Categories</h3>

            <div className="rounded-xl">
               {categories.map((category) => {
                  return (
                     <Link
                        className="block p-3 text-center font-medium text-dark03"
                        key={category.id}
                     >
                        {category.name}
                     </Link>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default LeftSideNav;
