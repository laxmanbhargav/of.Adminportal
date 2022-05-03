import React from 'react';
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import AuthorizedContent from '../../components/Shared/authorizedcontent';
import ListDC from '../../components/Dc/listdc';


const AddDc = () => {
    //search
    return (
        <AuthorizedContent>
            <Navbar />
                <ListDC />
        </AuthorizedContent>
    );

};

export default AddDc;