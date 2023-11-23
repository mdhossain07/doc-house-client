const Services = ({ handleService, handleBooking, handleDoctor }) => {
  return (
    <div>
      <div className="mt-5 flex gap-10  text-center md:text-left">
        <div className="">
          <h2 className="mb-10">Select Your Service</h2>
          <select
            onBlur={handleService}
            className="select select-accent w-full max-w-xs"
          >
            <option disabled selected>
              Choose your service
            </option>
            <option>Teeth Orthodontics</option>
            <option>Cosmetic Dentisty</option>
            <option>Teeth Cleaning</option>
            <option>Cavity Protection</option>
            <option>Pediatric Dental</option>
            <option>Oral Surgery</option>
          </select>
        </div>

        <div className="">
          <h2 className="mb-10">Select Your Doctor</h2>
          <select
            onBlur={handleDoctor}
            className="select select-accent w-full max-w-xs"
          >
            <option disabled selected>
              Choose your doctor
            </option>
            <option>Dr. Devi Shetty (Surgeon) </option>
            <option>Dr. Tonne Rahman (Orthopedics)</option>
            <option>Dr. Ashia (Medicine) </option>
            <option>Dr. Esha (Dentist) </option>
          </select>
        </div>
        <button
          onClick={handleBooking}
          className="btn btn-accent text-white mt-16"
        >
          Confim Booking
        </button>
      </div>
    </div>
  );
};

export default Services;
