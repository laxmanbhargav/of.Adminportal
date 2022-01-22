import React from 'react';
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import AuthorizedContent from '../../components/Shared/authorizedcontent';
import ListAgents from '../../components/Agent/listagents';


const Agents = () => {
    //search
    return (
        <AuthorizedContent>
            <Navbar />
                <ListAgents />
            <Footer />
        </AuthorizedContent>
    );

};

export default Agents;