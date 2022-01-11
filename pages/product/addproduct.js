import React from 'react';
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import AuthorizedContent from '../../components/Shared/authorizedcontent';
import Product from '../../components/Product/listproduct';
import ListAgents from '../../components/Agent/listagents';


const Products = () => {
    //search
    return (
        <AuthorizedContent>
            <Navbar />
                <Product />
            <Footer />
        </AuthorizedContent>
    );

};

export default Products;