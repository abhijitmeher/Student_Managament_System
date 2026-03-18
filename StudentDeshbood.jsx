import React from "react";
import {Header} from './Header';
import { Home } from "./Home";
import { StudentAddForm } from "./StudentAddForm";
import { Outlet } from "react-router-dom";

export const StudentDeshbood =()=>{
    return(
        <>
            <Header />
            <Outlet />
            
        </>
    );
}