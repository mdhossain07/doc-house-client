import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5001",
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      // console.log("request intercepted", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      // console.log(err);
      const status = err.response.status;
      // console.log(status);
      if (status === 401 || status === 403) {
        logOut().then(() => {
          navigate("/login");
        });
      }
      return Promise.reject(err);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
