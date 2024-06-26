import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useParams } from "react-router-dom";

const News = () => {
   const { id } = useParams();
   console.log(id);

   return (
      <div>
         <Header></Header>
         <Navbar></Navbar>
         <div className="grid md:grid-cols-4">
            <div className="col-span-3"></div>
            <div className="col-span-1">
               <RightSideNav></RightSideNav>
            </div>
         </div>
      </div>
   );
};

export default News;
