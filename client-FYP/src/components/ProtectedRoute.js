import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/loaderSlice";
import { setUser } from "../redux/userSlice";
import apiService from "../utils/apiService.js";

const ProtectedRoute = (props) => {
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getUserData = async () => {
    try {
      dispatch(showLoading());
      const response = await apiService.post(
        "/api/user/get-user-info-by-id",
        {
          token: localStorage.getItem("token"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        dispatch(setUser(response.data.data));
      } else {
        localStorage.clear();
        navigate("/login");
      }
    } catch (error) {
      dispatch(hideLoading());
      localStorage.clear();
      navigate("/login");
    }
  };

  useEffect(() => {
    if (!user) {
      getUserData();
    }
  }, []);

  if (localStorage.getItem("token")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
