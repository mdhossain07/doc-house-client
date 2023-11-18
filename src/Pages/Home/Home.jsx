import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Doc House | Home";
  }, []);
  return (
    <div>
      <h2>This is Home</h2>
    </div>
  );
};

export default Home;
