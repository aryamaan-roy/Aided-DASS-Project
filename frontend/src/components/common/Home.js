import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Home = (props) => {
if (localStorage.getItem("id") === null || localStorage.getItem("choice") === null){
  //console.log("here");
  window.location.href ="/signin";
}
if(localStorage.getItem("choice")=="Parent")
{
  window.location.href ="/p_home";
}
else
{
  window.location.href ="/t_home";
}

};




export default Home;
