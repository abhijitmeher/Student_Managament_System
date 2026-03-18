import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const StudentDelete =()=>{

    const {sid} = useParams();
    const navigate = useNavigate();

    const deleteStudentDataBaseOnId = async()=>{
        try {
             const api = await fetch(`http://localhost:3030/api/stud/delete/${sid}`,
                {
                    method : "DELETE"
                }
             );
            const resp = await api.text();

            if(resp === "success"){
                navigate("/");
            }
        } catch (error) {  
            console.log(error);
        }
    }

    useEffect(()=>{
        deleteStudentDataBaseOnId();
    },[]);
   
}
