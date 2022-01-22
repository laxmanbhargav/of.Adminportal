import React from 'react';
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import AuthorizedContent from '../../components/Shared/authorizedcontent';
import ListLand from '../../components/Land/listlanddetails';


const AddLand = () => {
    //search
    return (
        <AuthorizedContent>
            <Navbar />
                <ListLand />
        </AuthorizedContent>
    );

};

export default AddLand;