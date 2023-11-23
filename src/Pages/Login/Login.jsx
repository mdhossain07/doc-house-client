import Swal from "sweetalert2";
import login from "../../assets/icons/Frame (6).png";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    loginUser(data.email, data.password).then((res) => {
      Swal.fire({
        title: "Good job!",
        text: "User Logged in",
        icon: "success",
      });
      console.log(res.user);
      navigate("/");
    });
  };

  loginUser();
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full">
      <div className="bg-[#07332F] md:flex-1 min-h-screen">
        <img
          className="w-[400px] mx-auto text-center mt-32"
          src={login}
          alt=""
        />
      </div>
      <div className="md:flex-1 hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Sign in to Doc House</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="bg-[#F7A582] hover:bg-orange-400 p-3 text-white rounded-lg">
                  Login Now
                </button>
              </div>
              <p>
                New to this website?{" "}
                <Link className="text-green-600 font-medium" to="/register">
                  Register Now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
