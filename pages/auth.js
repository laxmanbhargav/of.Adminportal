import { useState, useEffect } from "react";

import { useRouter } from 'next/router';

import { useAuthContext } from "../contexts/authcontext";

import AuthModal from "../components/Authentication/login";

const LoginPage = () => {

    const user = useAuthContext();

    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push('/');
        }
    }, [user])

    return (
        !user && 
        <div className="main-content d-flex flex-column align-items-center">
            <AuthModal />
            <div className="flex-grow-1"></div>
        </div>
    );

}

export default LoginPage;