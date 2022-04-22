import { useState, useEffect } from "react";
import Sidebar from "../templates/Sidebar";
import backgroundImage from "../images/background.jpg";

const Home = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName("Dass TAs");
  }, []);

  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <div style={{
        width: "25%",
      }}>
      <Sidebar />
      <div style={{
        paddingTop: "150px",
        paddingLeft: "60px",
      }}>
        <p style = {{
          marginBottom: "0px",
          color: "#698AF8",
          fontSize: "30px",
          fontWeight: "bold",
        }}>
          Aided
        </p>
        <p style = {{
          marginTop: "0px",
          color: "#698AF8",
          fontSize: "10px",
          fontWeight: "bold",
        }}>
          - for a better tomorrow
        </p>
      
        <p style = {{
          // set font family
          fontFamily: "Arial, Helvetica, sans-serif",
          marginTop: "20px",
          color: "#042D74",
        }}
        >Aided is an AI/ML based Healthcare startup building intelligent solutions to Aid, Assess, & Connect Special needs children and their community.</p>
        </div>
      </div>
      <div style = {{

        height: "100vh",
        width: "80%",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",



      }}>
      </div>
    </div>
  );
};

export default Home;
