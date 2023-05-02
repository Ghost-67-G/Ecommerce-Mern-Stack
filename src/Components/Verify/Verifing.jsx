import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Verifing = () => {
  let navigate = useNavigate();
  const param = useParams();
  const dispatch = useDispatch()
  axios.get("/verify/"+param.token).then((resp)=>{
    if(resp.data.success){
        dispatch({
            type:"LOGIN",
            payload:resp.data.user
        })
        navigate("/")
    }
  });
  return <div>Verifing</div>;
};

export default Verifing;
