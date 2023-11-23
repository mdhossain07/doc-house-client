import { useState } from "react";
import MyCalender from "../../Components/MyCalender";
import Services from "../../Components/Services";
import Container from "../../Components/Shared/Container";
import Cover from "../../Components/Shared/Cover";
import chair from "../../assets/chair 1.png";
import moment from "moment/moment";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Appointment = () => {
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [doctor, setDoctor] = useState("");

  const { user } = useAuth();
  const navigate = useNavigate();

  const axiosPublic = useAxiosPublic();
  const handleSelect = (date) => {
    const formatedDate = moment(date).format("dddd, MMMM Do YYYY");
    console.log(formatedDate);
    setDate(formatedDate);
  };

  const handleService = (e) => {
    console.log(e.target.value);
    setService(e.target.value);
  };

  const handleDoctor = (e) => {
    console.log(e.target.value);
    setDoctor(e.target.value);
  };

  const handleBooking = () => {
    console.log("clicked...");
    const appointmentInfo = {
      booking_date: date,
      service: service,
      doctor: doctor,
    };

    console.log(appointmentInfo);

    if (user?.email) {
      axiosPublic.post("/appointments", appointmentInfo).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Appointment Done",
            icon: "success",
          });
          navigate("/");
        }
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <Cover heading={"Appointment"} />
      <Container>
        <div className="mt-10 flex flex-col flex-col-reverse md:flex-row justify-between items-center">
          <MyCalender handleSelect={handleSelect} />
          <img src={chair} alt="" />
        </div>
        <Services
          handleService={handleService}
          handleDoctor={handleDoctor}
          handleBooking={handleBooking}
        />
      </Container>
    </div>
  );
};

export default Appointment;
