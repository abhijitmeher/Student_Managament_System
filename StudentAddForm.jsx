import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const StudentAddForm = () => {

    const [stud, setStud] = useState({
        name: "",
        address: "",
        email: "",
        dob: "",
        gender: "",
        mobile: ""
    });

    const navigate = useNavigate();

    const handleStudData = (e) => {
        const { name, value } = e.target;
        setStud({ ...stud, [name]: value });
    }

    const handleSubmitStudentData = async(e)=>{
        e.preventDefault();
        console.log(stud);

        try{
             const sendApi = await fetch("http://localhost:3030/api/stud/add",
                {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify(stud)
                }
            );
            const resp = await sendApi.text();
            if(resp === "success"){
                navigate("/");
            }else{
                alert("Inavlid error page");
            }
        }catch(error){
            console.log(error);
        }

        setStud({
            name: "",
            address: "",
            email: "",
            dob: "",
            gender: "",
            mobile: ""
        });
    }

    const handleCencleButton =()=>{
        navigate("/");
    }

    return (
        <>
            <div className="add_form_container">
                <h2 className="add_form_heading">Student Add Form !</h2>
                <div className="add_form_input_details">
                    <form onSubmit={handleSubmitStudentData}>
                        <div className="input_field">
                            <label htmlFor="name">Name : </label>
                            <input type="text" name="name" id="name" value={stud.name} onChange={handleStudData} placeholder="Enter student name !" required />
                        </div>
                        <div className="input_field">
                            <label htmlFor="address">Address : </label>
                            <input type="text" name="address" id="address" value={stud.address} onChange={handleStudData} placeholder="Enter student address !" required />
                        </div>
                        <div className="input_field">
                            <label htmlFor="email">Email : </label>
                            <input type="text" name="email" id="email" value={stud.email} onChange={handleStudData} placeholder="Enter student email !" required />
                        </div>
                        <div className="input_field">
                            <label htmlFor="dob">DOB : </label>
                            <input type="date" name="dob" id="dob" value={stud.dob} required onChange={handleStudData} />
                        </div>
                        <div className="input_radio">
                            <label htmlFor="gender">Gender : </label>
                            <div className="radio_btn">
                                <input type="radio" name="gender" id="male" value="Male" checked={stud.gender == "Male"} onChange={handleStudData} /><label htmlFor="male">Male</label>
                                <input type="radio" name="gender" id="female" value="Female" checked={stud.gender == "Female"} onChange={handleStudData} /><label htmlFor="female">Female</label>
                                <input type="radio" name="gender" id="other" value="Other" checked={stud.gender == "Other"} onChange={handleStudData} /><label htmlFor="other">Other</label>
                            </div>
                        </div>
                        <div className="input_field">
                            <label htmlFor="mobile">Mobile : </label>
                            <input type="number" name="mobile" id="mobile" value={stud.mobile} onChange={handleStudData} placeholder="Enter student mobile !" required />
                        </div>
                        <div className="input_add_btn">
                            <input type="submit" className="add_stud_btn" value="Add Student" />
                            <button className="cancle_bn" onClick={handleCencleButton}>Cancle</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}