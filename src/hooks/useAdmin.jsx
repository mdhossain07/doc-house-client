import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "../hooks/useAuth";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/admin/${user.email}`);
      return res.data;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
