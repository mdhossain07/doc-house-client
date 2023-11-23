/* eslint-disable react/prop-types */
// import moment from "moment/moment";
import { Calendar } from "react-date-range";

const MyCalender = ({ handleSelect }) => {
  // const handleSelect = (date) => {
  //   const formatedDate = moment(date).format("dddd, MMMM Do YYYY");
  //   console.log(formatedDate);
  // };
  return (
    <div>
      <Calendar onChange={handleSelect} date={new Date()} />
    </div>
  );
};

export default MyCalender;
