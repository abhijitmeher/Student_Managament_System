import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateStudent = () => {

    const { sid } = useParams();
    const navigate = useNavigate();

    const [stud, setStud] = useState({
        sid: sid,
        name: "",
        address: "",
        email: "",
        dob: "",
        gender: "",
        mobile: ""
    });

    const getStudentApiBaseOnSid = async () => {
        const api = await fetch(`http://localhost:3030/api/stud/search/${sid}`);
        const resp = await api.json();
        setStud(resp);
    }

    useEffect(() => {
        getStudentApiBaseOnSid();
    }, []);

    const handleStudData = (e) => {
        const { name, value } = e.target;
        setStud({ ...stud, [name]: value });
    }

    const handleStudentUpdateSubmitForm = async (e) => {
        e.preventDefault();
        console.log(stud);
        try {
            const api = await fetch("http://localhost:3030/api/stud/update",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(stud)
                }
            );
            const resp = await api.text();

            if (resp === "success") {
                navigate("/");
            }else{
                alert("update failure !");
            }
        } catch (error) {  
            console.log(error);
        }
        setStud({
            sid: "",
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
        setStud({
            sid: "",
            name: "",
            address: "",
            email: "",
            dob: "",
            gender: "",
            mobile: ""
        });
    }

    return (
        <>
            <div className="student_update_form">
                <h2 className="update_student_heading">Student Update Form !</h2>
                <div className="student_update">
                    <form onSubmit={handleStudentUpdateSubmitForm}>
                        <div className="stud_update_field">
                            <label htmlFor="name">Name : </label>
                            <input type="text" name="name" id="name" value={stud.name} onChange={handleStudData} placeholder="Enter student name !" required />
                        </div>
                        <div className="stud_update_field">
                            <label htmlFor="address">Address : </label>
                            <input type="text" name="address" id="address" value={stud.address} onChange={handleStudData} placeholder="Enter student address !" required />
                        </div>
                        <div className="stud_update_field">
                            <label htmlFor="email">Email : </label>
                            <input type="text" name="email" id="email" value={stud.email} onChange={handleStudData} placeholder="Enter student email !" required />
                        </div>
                        <div className="stud_update_field">
                            <label htmlFor="dob">DOB : </label>
                            <input type="date" name="dob" id="dob" value={stud.dob} required onChange={handleStudData} />
                        </div>
                        <div className="stud_update_radio_field">
                            <label htmlFor="gender">Gender : </label>
                            <div className="update_radio_btn">
                                <input type="radio" name="gender" id="male" value="Male" checked={stud.gender == "Male"} onChange={handleStudData} /><label htmlFor="male">Male</label>
                                <input type="radio" name="gender" id="female" value="Female" checked={stud.gender == "Female"} onChange={handleStudData} /><label htmlFor="female">Female</label>
                                <input type="radio" name="gender" id="other" value="Other" checked={stud.gender == "Other"} onChange={handleStudData} /><label htmlFor="other">Other</label>
                            </div>
                        </div>
                        <div className="stud_update_field">
                            <label htmlFor="mobile">Mobile : </label>
                            <input type="number" name="mobile" id="mobile" value={stud.mobile} onChange={handleStudData} placeholder="Enter student mobile !" required />
                        </div>
                        <div className="stud_update_btn">
                            <input type="submit" className="update_stud_btn" value="Update Student" />
                            <button className="cancle_bn" onClick={handleCencleButton}>Cancle</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}