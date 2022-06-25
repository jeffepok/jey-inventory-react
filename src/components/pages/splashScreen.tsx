import React, { useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';
import AuthService from '../../services/auth';

function SplashScreen() {
    const navigate = useNavigate ();
    const authService = new AuthService();

    const navigateUser = async () =>{
        const verified = await authService.verifyToken();
        if (verified) {
            navigate("/dashboard");
        }else {
            navigate("/login");
        }
    }
    useEffect(()=>{
        navigateUser();        
    })
    return (
        <div className="container bg-blue-600 h-screen items-center justify-center">
            <h1 className="text-white my-auto">Jey Inventory</h1>
        </div>
    )
}

export default SplashScreen
