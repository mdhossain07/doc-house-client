import { useEffect, useState } from "react";
import Title from "../../Components/Title";
import Container from "../../Components/Shared/Container";
import location from "../../assets/icons/Frame (3).png";
import date from "../../assets/icons/Frame (4).png";
import price from "../../assets/icons/Frame (5).png";

const OurDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <Container>
        <Title>
          <h2 className="text-center mt-10">Our Expert Doctors</h2>
        </Title>
        <p className="w-9/12 text-center mx-auto my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          accusamus possimus! Ex perferendis culpa dolor accusantium itaque ut
          vitae ipsam?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="card w-full bg-base-100 rounded-md border border-[#E6E6E6] p-3"
            >
              <figure>
                <img src={doctor.image} alt={doctor.name} />
              </figure>
              <div className="card-body text-left">
                <h2 className="card-title">{doctor.name}</h2>
                <p className="text-[#6C6B6B] text-sm">{doctor.role}</p>
                <hr />
                <div className="flex items-center gap-2">
                  <img className="lg:w-[20px] h-[20px]" src={location} alt="" />
                  <p className="text-[#6C6B6B] text-xs">{doctor.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <img className="lg:w-[20px] h-[20px]" src={date} alt="" />
                  <p className="text-[#6C6B6B] text-xs">{doctor.available}</p>
                </div>
                <div className="flex items-center gap-2">
                  <img className="lg:w-[20px] h-[20px]" src={price} alt="" />
                  <p className="text-[#6C6B6B] text-xs">{doctor.visit}</p>
                </div>
                <div className="card-actions justify-start">
                  <button className="bg-[#F7A582] p-3 rounded-md mt-5 text-white">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurDoctors;
