import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserProfile } from "../../store/ProfileSlice";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const ProfileRole = useSelector(
    (state) => state?.profileSlice?.data?.userData?.role
  );

  const loadingstatus = useSelector((state) => state.profileSlice);
//   console.log(loadingstatus)

  // Redirect if no token at all
  // if (!token) {
  //   return <Navigate to="/login" replace />;
  // }

  // Fetch profile only once (if not loaded)
  useEffect(() => {
    if (!ProfileRole && loadingstatus !== "loading") {
      dispatch(fetchUserProfile());
    }
  }, [ProfileRole, loadingstatus, dispatch]);

  // Show loading while fetching
  if ((loadingstatus === "loading" || !ProfileRole) && token) {
    return <h1>Loading...</h1>;
  }

  // 🚫 Role not allowed
  if (!allowedRoles.includes(ProfileRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // ✅ Authorized
  return children;
};

export default ProtectedRoute;
