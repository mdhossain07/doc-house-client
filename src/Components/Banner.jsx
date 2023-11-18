import banner1 from "../../src/assets/Rectangle 20075.png";
import banner2 from "../../src/assets/Rectangle 20076.png";
import banner3 from "../../src/assets/Rectangle 20077.png";
import Container from "./Shared/Container";

const Banner = () => {
  return (
    <>
      <div className="bg-[rgb(7,51,47)] text-[#F3F3F3] ">
        <Container>
          <div className="flex flex-col lg:flex-row gap-10 items-center min-h-screen">
            <div className="mt-36 lg:mt-0 text-center lg:text-left">
              <h2 className="font-semibold text-4xl lg:text-6xl">
                Your Best Medical <br /> Help Center
              </h2>
              <p className="lg:w-[500px] mt-6 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Expedita, corrupti quaerat! Eveniet assumenda quia aut atque
                dolorem illo eius optio?
              </p>
              <button className="bg-[#F7A582] p-3 rounded-md mt-5">
                All Service
              </button>
            </div>

            <div className="flex relative mt-4">
              <img
                className="w-[260px] lg:w-[300px] -ml-24 lg:ml-0"
                src={banner3}
                alt=""
              />
              <img
                className="absolute -top-6 lg:-top-16 left-24 lg:left-80 z-10"
                src={banner1}
                alt=""
              />
              <img
                className="absolute top-24 lg:top-24 left-0 lg:left-36"
                src={banner2}
                alt=""
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
