import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { AppContextProvider } from "../../contexts/appcontext";
import { useAuthContext } from '../../contexts/authcontext';
import Loader from "./Loader";

export default function AuthorizedContent(props) {
    const {
        children,
    } = props;

    const router = useRouter();

    const authState = useAuthContext();

    useEffect(() => {
        if (authState?.user != null) {
            router.push('/auth');
        }
    }, [authState?.user])

    return (
        <>
            {authState
             ? <AppContextProvider>{children}</AppContextProvider> 
             : <Loader loading={true} />}
        </>
    )
}