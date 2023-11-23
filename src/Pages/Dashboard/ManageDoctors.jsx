import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";

const ManageDoctors = () => {
  const axiosSecure = useAxiosSecure();
  const { data: doctors } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await axiosSecure.get("/get-doctors");
      return res.data;
    },
  });

  const handleRemoveDoctor = () => {
    console.log("clicked....");
  };

  return (
    <div>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {doctors?.map((doctor, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{doctor?.name}</td>
                <td>{doctor?.email}</td>
                <td>{doctor.speciality}</td>
                <td>
                  <button className="btn bg-red-500">
                    <FaTrashAlt
                      onClick={() => handleRemoveDoctor(doctor._id)}
                      className="text-md text-white"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
