import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Protected(props){
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let isLoggedIn = localStorage.getItem('isLoggedIn');
        let isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn')
        if(!isLoggedIn){
            navigate('/');
        }
        if(!isAdminLoggedIn){
            navigate('/');
        }
        localStorage.setItem('isLoggedIn', false);
        localStorage.setItem('isAdminLoggedIn', false);
    }, [navigate]);
    return(
        <>
            <Component />
        </>
    )
}

export default Protected;
