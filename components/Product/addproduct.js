import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { useForm } from 'react-hook-form';

import { Modal, Button } from 'react-bootstrap';
import { useAppContext } from '../../contexts/appcontext';

import { createProductAction } from "../../actions/productactions";

import { useToasts } from "react-toast-notifications";

import { listProductCategoryAction } from '../../actions/productactions';
import LoadingSpinner from '../Shared/LoadingSpinner';


const Product = (props) => {

    const [genreSelection, setGenreSelection] = useState([]);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { state, dispatch } = useAppContext();

    const { token } = parseCookies();

    const { addToast } = useToasts();

    useEffect(() => {
        const fetchProductData = async () => {
            await listProductCategoryAction(token, dispatch);
        }
        fetchProductData();
    }, [])



    const onAddProduct = async (data) => {
        const body = {
            name: data.productName,
            productCategoryId: data.productCategory,
            description: data.productDescription,
        }
        try {
            await createProductAction(body, token, dispatch);
            handleClose();
        } catch {
        }
    }

    const handleClose = () => {

        reset({
            productName: "", productCategory: ""
        });
        props.onHide();
    }


    return (
        <>
             <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <form onSubmit={e => e.preventDefault()}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Product
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
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

                                    {state.productcategory.data && state.productcategory.data?.map((productcategory) => (
                                    <option value={productcategory.id}>{productcategory.name}</option>
                                ))}


                                </select>
                                {errors["productCategory"] && <span className="errorMessage">Please select product category </span>}
                            </div>
                        </div>


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
                                {errors["productDescription"] && <span className="errorMessage">Please enter the product description</span>}
                            </div>
                        </div>
                        </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleSubmit(onAddProduct)}>Add product</Button>
                        <Button onClick={handleClose}>Close</Button>

                    </Modal.Footer>
                </form>
            </Modal>
            <Modal
                className="loadingmodal"
                show={state.product.loading}
                backdrop="static"
                keyboard={false}
                centered
            >
                <LoadingSpinner />
            </Modal>                

        </>
    );
}

export default Product;
