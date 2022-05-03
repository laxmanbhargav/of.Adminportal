import React from 'react';
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import AuthorizedContent from '../../components/Shared/authorizedcontent';
import ListDCInventory from '../../components/Dc/listdcinventory';


const AddDc = () => {
    //search
    return (
        <AuthorizedContent>
            <Navbar />
                <ListDCInventory />
        </AuthorizedContent>
    );

};

export default AddDc;