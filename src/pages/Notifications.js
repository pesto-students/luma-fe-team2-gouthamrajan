import React from 'react';
import Layout from '../components/Layout';
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { hideLoading, showLoading } from "../redux/alertsSlice";
import { setUser,reloadUserData } from "../redux/userSlice";
import { notification, Tabs } from "antd"
function Notifications() {
    const {user} = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const markAllAsSeen=async()=>{
        try {
            dispatch(showLoading());
            const response = await axios.post("/mark-all-notifications-as-seen", {email : user.email} , {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("token")}`
                }
            });
            dispatch(hideLoading());
            if (response.data.success) {
              toast.success(response.data.message)
             dispatch(setUser(response.data.data));
            } else {
              toast.error(response.data.message);
            }
          } catch (error) {
            dispatch(hideLoading());
            toast.error("Something went wrong");
          }
      }
      const deleteAll=async()=>{
        try {
            dispatch(showLoading());
            const response = await axios.post("/delete-all-notification",{email : user.email} , {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("token")}`
                }
            });
            dispatch(hideLoading());
            if (response.data.success) {
              toast.success(response.data.message)
              dispatch(setUser(response.data.data));
            } else {
              toast.error(response.data.message);
            }
          } catch (error) {
            dispatch(hideLoading());
            toast.error("Something went wrong");
          }
      }
    return (
        <Layout>

            <h1 className='page-title'>Notifications</h1>
        <Tabs>
            <items tab="Unseen"  key={0}>
            <div className="d-flex justify-content-end">
               <h1 className="anchor" onClick={()=>markAllAsSeen()}>Mark all as seen</h1>
             </div>
            {user?.unseenNotifications.map((notification)=>(
                <div className='card p-2 mt-2' onClick={()=>navigate(notification.onClickPath)}>
                      <div className='card-text'>{notification.message}</div>
                </div>

            ))}
         </items>
            <items tab="seen" key={1}>
            <div className="d-flex justify-content-end">
               <h1 className="anchor" onClick={()=>deleteAll()}>Delete all</h1>
             </div>
             {user?.seenNotifications.map((notification) => (
            <div className="card p-2 mt-2" onClick={()=>navigate(notification.onClickPath)}>
                <div className="card-text">{notification.message}</div>
            </div>
          ))}
            </items>

            

        </Tabs>


        </Layout>
    );
}

export default Notifications;