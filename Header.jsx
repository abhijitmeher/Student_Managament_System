import React from "react";
import { useNavigate } from "react-router-dom";

export const Header =()=>{

    const navigate = useNavigate();

    const handleRedirectHomePage =()=>{
        navigate("/");
    }

    return(
        <>
            <div className="Header_container">
                <div className="student_image">
                    <img src="Abhijit Meher.jpeg" className="stud_image" alt="student image !"/>
                </div>
                <div className="header_heading">
                    <h1 className="heading" onClick={handleRedirectHomePage}>Student Management System</h1>
                </div>
            </div>
        </>
    );
}
