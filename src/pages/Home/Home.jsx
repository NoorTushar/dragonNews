import BreakingNews from "../BreakingNews";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import NewsCard from "./NewsCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
   const news = useLoaderData();

   return (
      <div>
         <Header></Header>
         <BreakingNews></BreakingNews>
         <Navbar></Navbar>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-7">
            <div>
               <LeftSideNav></LeftSideNav>
            </div>
            <div className="md:col-span-2">
               {news.map((eachNews) => {
                  return (
                     <NewsCard
                        key={eachNews._id}
                        eachNews={eachNews}
                     ></NewsCard>
                  );
               })}
            </div>
            <div>
               <RightSideNav></RightSideNav>
            </div>
         </div>
      </div>
   );
};

export default Home;
