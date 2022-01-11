import { useState } from "react";
import { parseCookies } from "nookies";
import { useForm } from 'react-hook-form';


import { useAppContext } from '../../contexts/appcontext';

import { createProductCategoryAction } from "../../actions/productactions";

import { useToasts } from "react-toast-notifications";

import { Modal, Button } from 'react-bootstrap';
import LoadingSpinner from '../Shared/LoadingSpinner';


const AddProductCategory = (props) => {

    const [genreSelection, setGenreSelection] = useState([]);

    const { register, handleSubmit, formState: { errors } , reset} = useForm();

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
            handleClose();
        } catch {
        }
    }

    const handleClose = () => {

        reset({
            productName: "", productDescription: ""
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
                 
                        </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleSubmit(onAddProductCategory)}>Add product</Button>
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

export default AddProductCategory;
