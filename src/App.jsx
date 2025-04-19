import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Pg1 from "./pages/pg1";
import Pg2 from "./pages/Pg2";
import Header from "./components/Header";
import Pg1Bottom from "./pages/Pg1Bottom";
import Pg3 from "./pages/Pg3";
import Pg4 from "./pages/Pg4";
import Pg5 from "./pages/Pg5";
import Pg6 from "./pages/Pg6";
import Pg7 from "./pages/Pg7";
import Pg8 from "./pages/Pg8";
import Pg9 from "./pages/Pg9";
import Pg10 from "./pages/Pg10";
import Pg11 from "./pages/Pg11";
import Pg12 from "./pages/Pg12";
import Pg13 from "./pages/Pg13";

const App = () => {

  useEffect(() => {
    const scroll = new LocomotiveScroll();
})
  

  return (
    <div className="overflow-hidden" >
      <Header />
      <Pg1 />
      <Pg1Bottom />
      <Pg2 />
      <Pg3 />
      {/* <Pg4 /> */}
      {/* <Pg5 /> */}
      <Pg6 />
      <Pg7 />
      <Pg8 />
      <Pg9 />
      <Pg10 />
      <Pg11 />
      {/* <Pg12 /> */}
      <Pg13/>
    </div>
  );
};

export default App;
