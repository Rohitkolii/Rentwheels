import React, { useEffect, useState } from 'react'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
import Styles from '../AdminBookings/AdminBookings.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserList } from '../../../store/userlistSlice'

const UsersListPage = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.userListSlice.data.userslist)
    // console.log(users.userslist);
    
    const userlist = users && users.filter((u)=> u.role == "user")
    // console.log(userlist);

    useEffect(()=> {
        dispatch(fetchUserList(localStorage.getItem("token")))
    },[])
    
    const[sidebarVisiblity, setSidebarVisiblity] = useState(false)
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
                    <table>
                        <tr>
                            <th>id</th>
                            <th>Customer</th>
                            <th>Age</th>
                            <th>DL No.</th>
                            <th>email</th>
                            <th>Phone</th>
                            <th>Address</th>
                        </tr>
                        {
                            userlist && userlist.map((elm)=> {
                                return(
                                    <tr>
                                        <td>{elm._id}</td>
                                        <td>{elm.username}</td>
                                        <td>{elm.age}</td>
                                        <td>{elm.dlnumber}</td>
                                        <td>{elm.email}</td>
                                        <td>{elm.phone}</td>
                                        <td>{elm.adress}</td>
                                    </tr>
                                )
                            })

                            || <h1 style={{margin: "20px auto", textAlign: 'center'}}>No Users Found</h1>
                        }
                        
                    </table>
                </div>
            </section>
        </div>
    </>
  )
}

export default UsersListPage