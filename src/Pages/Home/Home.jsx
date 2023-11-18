import { useEffect } from "react";
import Banner from "./Banner";
import Services from "./Services";
import OurDoctors from "./OurDoctors";

const Home = () => {
  useEffect(() => {
    document.title = "Doc House | Home";
  }, []);

  return (
    <div>
      <Banner />
      <Services />
      <OurDoctors />
    </div>
  );
};

export default Home;
