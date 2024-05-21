import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Protected(props){
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let isLoggedIn = localStorage.getItem('isLoggedIn');
        if(!isLoggedIn){
            navigate('/');
        }
    }, [navigate]);
    return(
        <>
            <Component />
        </>
    )
}

export default Protected;
