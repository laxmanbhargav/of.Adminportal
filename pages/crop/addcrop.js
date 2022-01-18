import React from 'react';
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import AuthorizedContent from '../../components/Shared/authorizedcontent';
import ListCrop from '../../components/Crop/listcrop';


const AddCrop = () => {
    //search
    return (
        <AuthorizedContent>
            <Navbar />
                <ListCrop />
            <Footer />
        </AuthorizedContent>
    );

};

export default AddCrop;