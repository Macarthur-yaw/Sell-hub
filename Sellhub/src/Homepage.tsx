import { Outlet } from "react-router";
import Navbar from "./Components/Navbar";
import { Suspense } from "react";

export default function Homepage(){
    return (
        <><Navbar />
        <Suspense fallback={<h2>Loading</h2>}>
        <Outlet />
        </Suspense>
        </>
    )
}