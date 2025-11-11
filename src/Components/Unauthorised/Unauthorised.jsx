import React from "react";
import Styles from "./Unauthorised.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserProfile } from "../../store/ProfileSlice";
import { Link } from "react-router";

const Unauthorised = () => {
  const dispatch = useDispatch();
  const UserRole = useSelector((state) => state.profileSlice?.data?.userData?.role);
//   console.log(UserRole)

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, []);
  return (
    <div className={Styles.Unauthorised}>
      <h1>Unauthorised User!</h1>
      <p>You are not allowed to access this Page.</p> <br />
      {
        UserRole === 'user' && <Link to="/">Home</Link>
      }
      {
        UserRole === 'admin' && <Link to="/admin">Admin</Link>
      }
      {
        UserRole === 'vendor' && <Link to="/vendor">Vendor</Link>
      }
      
    </div>
  );
};

export default Unauthorised;
