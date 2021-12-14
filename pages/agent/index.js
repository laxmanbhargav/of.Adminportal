import React from 'react';
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import AuthorizedContent from '../../components/Shared/authorizedcontent';


const Agents = () => {
    //search
    return (
        <AuthorizedContent>
            <Navbar />
            <Footer />
        </AuthorizedContent>
    );

};

export default Agents;