import { useEffect } from "react";
import Banner from "../../Components/Banner";

const Home = () => {
  useEffect(() => {
    document.title = "Doc House | Home";
  }, []);

  return (
    <div>
      <Banner />
    </div>
  );
};

export default Home;
