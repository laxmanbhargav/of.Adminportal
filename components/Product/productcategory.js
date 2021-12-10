import { useState } from "react";
import { parseCookies } from "nookies";
import { useForm } from 'react-hook-form';


import { useAppContext } from '../../contexts/appcontext';

import { createProductCategoryAction } from "../../actions/productactions";

import { useToasts } from "react-toast-notifications";


const ProductCategory = () => {

    const [genreSelection, setGenreSelection] = useState([]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { state, dispatch } = useAppContext();

    const { token } = parseCookies();

    const { addToast } = useToasts();


    const onAddProductCategory = async (data) => {
        const body = {
            name: data.productName,
            description: data.productDescription,
        }
        try {
            await createProductCategoryAction(body, token, dispatch);
        } catch {
            console.log("In Catch");
        }
    }

    return (
        <>
            <div className="main-content d-flex flex-column">
                <div className="breadcrumb-area">
                    <h1>Product Category</h1>
                </div>

                <form >


                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>

                                    Product Name:
                                </label>
                                <input {...register('productName', { required: true })}
                                    type="text"
                                    className="form-control"
                                    placeholder="Product Name"
                                />
                                {errors["productName"] && <span className="errorMessage">Please enter product name</span>}
                            </div>

                            <div className="form-group">
                                <label>
                                    <i className='bx bx-productcategory' ></i>{" "}
                                    Product Description:
                                </label>
                                <textarea
                                    {...register('productDescription', { required: true })}
                                    cols="30"
                                    rows="7"
                                    className="form-control"
                                    placeholder="Product Description"

                                ></textarea>
                                {errors["productDescription"] && <span className="errorMessage">Please enter the product category description</span>}
                            </div>
                        </div>
                    </div>
                    <div className="add-listings-btn">
                        <button type="submit" onClick={handleSubmit(onAddProductCategory)}>Add Product Category</button>
                    </div>
                    <div className="flex-grow-1"></div>
                </form>
            </div>
        </>
    );
}

export default ProductCategory;
