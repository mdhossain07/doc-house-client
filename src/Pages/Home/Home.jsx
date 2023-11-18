import { useEffect } from "react";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
  useEffect(() => {
    document.title = "Doc House | Home";
  }, []);

  return (
    <div>
      <Banner />
      <Services />
    </div>
  );
};

export default Home;
