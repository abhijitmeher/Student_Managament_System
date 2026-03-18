import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StudentDeshbood } from "./StudentDeshbood";
import { Home } from "./Home";
import {ErrorPage} from './ErrorPage';
import { StudentAddForm } from "./StudentAddForm";
import { UpdateStudent } from "./UpdateStudent";
import { StudentDelete } from "./StudentDelete";

export const StudentNavigation =()=>{

    const router = createBrowserRouter([
        {
            path : "/",
            element : <StudentDeshbood />,
            errorElement : <ErrorPage />,
            children : [
                {
                    path : "/",
                    element : <Home />
                },
                {
                    path : "/addStudent",
                    element : <StudentAddForm />
                },
                {
                    path : "/updateStudent/:sid",
                    element : <UpdateStudent />
                },
                {
                    path : "/deleteStudent/:sid",
                    element : <StudentDelete />
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />

}

