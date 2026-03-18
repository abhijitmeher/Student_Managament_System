import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Home =()=>{

    const [stud,setStud] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('');

    const navigate = useNavigate();

    const handleAddForm =()=>{
        navigate("/addStudent");
    }

    const getStudentAPI =async()=>{
       try {
             const stud_api = await fetch("http://localhost:3030/api/stud/all"); 
             const resp = await stud_api.json();
             setStud(resp);
             setLoading(false);
       } catch (error) {
            setLoading(false);
            setError(error);
       }
    }

    useEffect(()=>{
        getStudentAPI();
    },[]);

    console.log(stud);

    if(loading){
        return <h1>Loading.... !</h1>;
    }

    return(
        <>
           <div className="home_container">
               <div className="student_list">
                    <h1>List Of Students</h1>
               </div>
                <div className="student_add_btn">
                    <button className="add_btn" onClick={handleAddForm}>Add Student</button>
                </div>
                <div className="Employee_details" >
                    <table cellPadding="0" cellSpacing="0" className="stud_table">
                        <tr>
                            <th>Sid</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Mobile</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                       {
                        stud.map(val =>{
                            return(
                                <>
                                    <tr key={val.sid}>
                                        <td>{val.sid}</td>
                                        <td>{val.name}</td>
                                        <td>{val.address}</td>
                                        <td>{val.email}</td>
                                        <td>{val.dob}</td>
                                        <td>{val.gender}</td>
                                        <td>{val.mobile}</td>
                                        <td className="edit_btn"><NavLink to={`/updateStudent/${val.sid}`}>Edit</NavLink></td>
                                        <td className="delete_btn"><NavLink to={`/deleteStudent/${val.sid}`}>Delete</NavLink></td>
                                    </tr>
                                </>
                            );
                        })
                       }
                    </table>
                </div>
           </div>
        </>
    );
}