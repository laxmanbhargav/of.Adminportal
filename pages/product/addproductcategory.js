import React from 'react';
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import AuthorizedContent from '../../components/Shared/authorizedcontent';
import ProductCategory from '../../components/Product/listproductcategory';


const ProductCategories = () => {
    //search
    return (
        <AuthorizedContent>
            <Navbar />
                <ProductCategory />
            <Footer />
        </AuthorizedContent>
    );

};

export default ProductCategories;