import { useState } from "react";
import { parseCookies } from "nookies";
import { useForm } from 'react-hook-form';


import { useAppContext } from '../../contexts/appcontext';

import { createProductAction } from "../../actions/productactions";

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
            productCategoryId: "227A659C-C555-EC11-A355-AC12030DA196",
            description: data.productDescription,
        }
        try {
            await createProductAction(body, token, dispatch);
        } catch {
            console.log("In Catch");
        }
    }

    return (
        <>
            <div className="main-content d-flex flex-column">
                <div className="breadcrumb-area">
                    <h1>Product</h1>
                </div>

                <form >


                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>
                                    <i className='bx bx-camera-land'></i>{" "}
                                    Product Name:
                                </label>
                                <input {...register('productName', { required: true })}
                                    type="text"
                                    className="form-control"
                                    placeholder="Name of the product"
                                />
                                {errors["productName"] && <span className="errorMessage">Please enter the product name</span>}
                            </div>



                        </div>

                        <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>
                                        <i className='bx bx-message-dots'></i>{" "}
                                        Product Category:
                                    </label>
                                    <select {...register('productCategory', { required: true })}
                                        className="dashbaord-category-select"

                                    >
                                        <option disabled>Select Product Category</option>

                                        <option>Tomato</option>
                                        <option>Potato</option>
                                        

                                    </select>
                                    {errors["productCategory"] && <span className="errorMessage">Please select product category </span>}
                                </div>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
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
