import doctor from "../../assets/Rectangle 20078.png";
import teeth from "../../assets/Rectangle 10.png";
import Container from "../../Components/Shared/Container";
import Title from "../../Components/Title";

const Services = () => {
  return (
    <>
      <Container>
        <div className="flex items-center gap-10 min-h-screen">
          <div>
            <img className="h-[650px]" src={doctor} alt="" />
          </div>

          <div className="space-y-3">
            <Title>
              <h2>Our Services</h2>
            </Title>
            <p className="w-[500px] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              maiores. Voluptates, qui iste. Dolores unde deserunt consequuntur
              a commodi sed.
            </p>
            <div role="tablist" className="tabs tabs-boxed">
              <a role="tab" className="tab">
                Cavity Protection
              </a>
              <a role="tab" className="tab tab-active">
                Cosmetic Density
              </a>
              <a role="tab" className="tab">
                Oral Surgery
              </a>
            </div>
            <img className="lg:w-[400px]" src={teeth} alt="" />
            <Title>
              <h2>Electro Gastrology Therapy</h2>
            </Title>
            <p className="w-[500px] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              velit repellat debitis in consequatur optio voluptate neque hic
              est tempora?
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              velit repellat debitis in consequatur optio voluptate neque hic
              est tempora?
            </p>
            <button className="bg-[#F7A582] p-3 rounded-md mt-5 text-white">
              More Details
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Services;
