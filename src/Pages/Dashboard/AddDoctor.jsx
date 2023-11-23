import { useForm } from "react-hook-form";
import Container from "../../Components/Shared/Container";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_api = import.meta.env.VITE_Image_Hosting_API;
const image_hosting_key = `https://api.imgbb.com/1/upload?key=${image_hosting_api}`;

console.log(image_hosting_key);

const AddDoctor = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_key, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // console.log(res.data);

    const doctorInfo = {
      name: data.name,
      email: data.email,
      speciality: data.speciality,
      image: res.data.data.display_url,
    };

    axiosSecure.post("/add-doctor", doctorInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Good job!",
          text: "New doctor has been added!",
          icon: "success",
        });
      }
    });
  };
  return (
    <div>
      <Container>
        <h2 className="text-3xl text-center font-medium">Add Doctor</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Doctor Name</span>
              </label>
              <input
                type="text"
                placeholder="your name"
                className="input input-bordered w-full max-w-xs"
                {...register("name")}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Doctor Email</span>
              </label>
              <input
                type="email"
                placeholder="your email"
                className="input input-bordered w-full max-w-xs"
                {...register("email")}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Doctor Speciality</span>
              </label>
              <input
                type="text"
                placeholder="your speciality"
                className="input input-bordered w-full max-w-xs"
                {...register("speciality")}
              />
            </div>

            <div className="form-control w-full max-w-xs md:mt-5">
              <label className="label"></label>

              <input
                type="file"
                className="file-input w-full max-w-xs"
                {...register("image")}
              />
            </div>
          </div>
          <div className="flex w-full mt-10 justify-center">
            <button className="btn btn-accent text-white">Register</button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddDoctor;
