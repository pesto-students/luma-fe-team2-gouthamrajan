import { Button, Col, DatePicker, Form, Input, Row, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import moment from "moment";
import { Navigate, useNavigate, useParams } from "react-router-dom";
function BookAppointment() {
  const [isAvailable, setIsAvailable] = useState(false);
  const navigate = useNavigate();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const { user } = useSelector((state) => state.user);
  const [expert, setExpert] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();
  const getExpertData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/get-expert-info-by-id",
        {
          expertId: params.expertId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());
      if (response.data.success) {
        setExpert(response.data.data);
      }
    } catch (error) {
      console.log(error);
      dispatch(hideLoading());
    }
  };
  const checkAvailability = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/check-booking-avilability",
        {
          expertId: params.expertId,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        setIsAvailable(true);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error booking appointment");
      dispatch(hideLoading());
    }
  };


  const bookNow = async () => {
    setIsAvailable(false);
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/book-appointment",
        {
          expertId: params.expertId,
          userId: user._id,
          expertInfo: expert,
          userInfo: user,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());
      if (response.data.success) {

        toast.success(response.data.message);
        navigate('/appointments')
      }
    } catch (error) {
      toast.error("Error booking appointment");
      dispatch(hideLoading());
    }
  };
  useEffect(() => {
    getExpertData();
  }, []);
  return (
    <Layout>
      {expert &&
        (
          <div>
            <h1 className="page-title">
              {expert.firstName} {expert.lastName}
            </h1>
            <hr />
            <Row gutter={20} className="mt-5" align="middle">
              <Col span={8} sm={24} xs={24} lg={8}>
                <img
                  src="https://thumbs.dreamstime.com/b/finger-press-book-now-button-booking-reservation-icon-online-149789867.jpg"
                  alt=""
                  width="100%"
                  height='400'
                />
              </Col>
              <Col span={8} sm={24} xs={24} lg={8}>
                <h1 className="normal-text">
                  <b>Timings :</b> {expert.timings[0]} - {expert.timings[1]}
                </h1>
                <p>
                  <b>Phone Number : </b>
                  {expert.phoneNumber}
                </p>
                <p>
                  <b>Address : </b>
                  {expert.address}
                </p>
                <p>
                  <b>Fee per Visit : </b>
                  {expert.feePerConsultation}
                </p>
                <p>
                  <b>Website : </b>
                  {expert.website}
                </p>
                <div className="d-flex flex-column pt-2 mt-2">
                  <DatePicker
                    format="DD-MM-YYYY"
                    onChange={(value) => {
                      setDate(moment(value).format("DD-MM-YYYY"));
                      setIsAvailable(false);
                    }}
                  />
                  <TimePicker
                    format="HH:mm"
                    className="mt-3"
                    onChange={(value) => {
                      setIsAvailable(false);
                      setTime(moment(value).format("HH:mm"));
                    }}
                  />
                  {!isAvailable && <Button
                    className="primary-button mt-3 full-width-button"
                    onClick={checkAvailability}
                  >
                    Check Availability
                  </Button>}


                  {isAvailable && (
                    <Button
                      className="primary-button mt-3 full-width-button"
                      onClick={bookNow}
                    >
                      Book Now
                    </Button>
                  )}

                </div>
              </Col>
            </Row>
          </div>
        )}
    </Layout>
  );
}

export default BookAppointment;