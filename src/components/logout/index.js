import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
function Logout({ isAuthenticated, setIsAuthenticated }) {
    const navigate = useNavigate()
    useEffect(() => {
        localStorage.clear();
        console.log("logout", isAuthenticated)
        setIsAuthenticated(false);
        navigate('/login')

    })
}
export default Logout;