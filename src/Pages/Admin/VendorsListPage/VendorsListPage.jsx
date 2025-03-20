import React, { useEffect, useState } from 'react'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
import Styles from '../AdminBookings/AdminBookings.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { fetchUserList } from '../../../store/userlistSlice'

import { ImBin } from "react-icons/im";
import { toast } from 'react-toastify'


const VendorsListPage = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.userListSlice.data.userslist)
    // console.log(users.userslist);
    
    const userlist = users && users.filter((u)=> u.role == "vendor")
    // console.log(userlist);

    useEffect(()=> {
        dispatch(fetchUserList(localStorage.getItem("token")))
    },[userlist])
    
    const[sidebarVisiblity, setSidebarVisiblity] = useState(false)

const deleteuser = async (id) => {
    const res = confirm("Are you sure! you want to delete")

    if(res){
    try {
        const response = await fetch(`${import.meta.env.VITE_URL}/api/auth/delete/${id}`,{
            method: "DELETE"
        })
        toast.success('Vendor Deleted Successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            console.log(response);
            
    } catch (error) {
        toast.error('Something went wrong!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
}else{
    toast.error('Request Cancel', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}
    
}

const [searchQuery, setSearchQuery] = useState("");
    
        // Filtering function
        const filteredUsers = userlist && userlist.filter(user => {
            const query = searchQuery.toLowerCase();
            return (
                user.username.toLowerCase().includes(query) ||
                user.email.toLowerCase().includes(query) ||
                user.phone.toLowerCase().includes(query) ||
                user.age.toLowerCase().includes(query) ||
                user.dlnumber.toLowerCase().includes(query) ||
                user.adress.toLowerCase().includes(query)
            );
        });
    
  return (
    <>

        <div style={{display: 'flex'}}>
            <AdminSidebar 
            setSidebarVisiblity={setSidebarVisiblity}
            sidebarVisiblity={sidebarVisiblity} />
            <section style={{width: "100%"}}>
                <AdminNavabar 
                setSidebarVisiblity={setSidebarVisiblity}
                sidebarVisiblity={sidebarVisiblity} />
                <div className={Styles.bookingtable}>
                <div style={{width: "95%", margin: "10px auto"}}>
                    <label htmlFor="">Search:</label> <br />
                    <input onChange={(e)=> setSearchQuery(e.target.value)} placeholder='Search' type="text" name="" id="" />
                </div>
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>id</th>
                            <th>Vendor</th>
                            <th>Age</th>
                            <th>Dl No.</th>
                            <th>email</th>
                            <th>Phone</th>
                            <th>Adress</th>
                            <th>Action</th>
                        </tr>
                        {
                            filteredUsers?.length ? filteredUsers.map((elm, i)=> {
                                return(
                                    <tr key={elm._id}>
                                        <td>{i+1}</td>
                                        <td title={elm._id}>{elm._id.substring(0,10)}...</td>
                                        <td>{elm.username}</td>
                                        <td>{elm.age}</td>
                                        <td>{elm.dlnumber}</td>
                                        <td>{elm.email}</td>
                                        <td>{elm.phone}</td>
                                        <td>{elm.adress}</td>
                                        <td onClick={()=> deleteuser(elm._id)} style={{cursor: "pointer"}}><ImBin style={{color: "#0061ff", fontSize: 20}} /></td>
                                    </tr>
                                )
                            })
                            :
                            <h1 style={{margin: "20px auto", textAlign: 'center', textTransform: 'uppercase', color:'#0061ff'}}>No Vendors Found!</h1>
                        }
                    </table>
                </div>
            </section>
        </div>
    </>
  )
}

export default VendorsListPage