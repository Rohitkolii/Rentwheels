import React, { useEffect, useState } from "react";
import AdminNavabar from "../../../Components/AdminNavbar/AdminNavabar";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import Styles from "../../Admin/DashboardPage/DashboardPage.module.css";
import { IoCarOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { VscBook } from "react-icons/vsc";
import { GrUserWorker } from "react-icons/gr";
import { PiUserListLight } from "react-icons/pi";
import { MdCurrencyRupee } from "react-icons/md";

import { FaCar } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../../store/ProfileSlice";
import Loader from "../../../Components/Loader/Loader";
import { fetchVehicleList } from "../../../store/getVehicleSlice";
import { fetchBookingList } from "../../../store/getBookingListSlice";
import { fetchFeedback } from "../../../store/getFeedbackSlice";
import { fetchDashboardData } from "../../../store/DashSlice";

const DashboardPageVendor = () => {
  const [sidebarVisiblity, setSidebarVisiblity] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, []);

  const { data, status } = useSelector((state) => state.DashDataSlice);
  console.log(data)
  const ProfileRole = useSelector(
    (state) => state?.profileSlice?.data?.userData?.role
  );

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, []);

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <AdminSidebar
          setSidebarVisiblity={setSidebarVisiblity}
          sidebarVisiblity={sidebarVisiblity}
        />
        <div className={Styles.DashboardPage}>
          <AdminNavabar
            setSidebarVisiblity={setSidebarVisiblity}
            sidebarVisiblity={sidebarVisiblity}
          />

          <section className={Styles.dashContent}>
            <h1>Vendor's Dashboard</h1>
            <p className="sublight" style={{ fontSize: 15 }}>
              plan, pripritize, and accoplish your tasks with ease.
            </p>
            {/* <br /> */}
            <div className={Styles.dashTop}>
              <div onClick={()=>  navigate("editvehicle")}>
                <p>
                  <IoCarOutline />
                </p>
                <p>Total Vehicles</p>
                <p>{data?.Total_Vehicle || 0}</p>
              </div>
              <div onClick={()=>  navigate("bookinghistory")}>
                <p>
                  <VscBook />
                </p>
                <p>Total Bookings</p>
                <p>{data?.Total_Bookings || 0}</p>
              </div>
              <div onClick={()=>  navigate("feedbacks")}>
                <p>
                  <HiOutlineUsers />
                </p>
                <p>Total Feedback</p>
                <p>{data?.Total_Feedbacks || 0}</p>
              </div>
              <div>
                <p>
                  <MdCurrencyRupee />
                </p>
                <p>Earnings</p>
                <p>{data?.Total_Earnings || 0} Rs.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default DashboardPageVendor;
