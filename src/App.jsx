import React from "react";
import Topbar from "./components/Topbar";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import Successstories from "./components/Successstories";
import Timeline from "./components/Timeline";

const App = () => {
  return (
    <div>
      <Topbar />
      <Registration />
      <Timeline/>
      <Successstories/>
      <Footer />
    </div>
  );
};

export default App;
