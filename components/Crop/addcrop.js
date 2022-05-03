import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { useForm } from 'react-hook-form';


import { useAppContext } from '../../contexts/appcontext';

import { createCropAction } from "../../actions/cropactions";

import { useToasts } from "react-toast-notifications";

import { listProductAction } from '../../actions/productactions';
import { getAgentsAction } from "../../actions/agentaction";
import { getCropsAction } from "../../actions/cropactions";
import { createFutureInventoryAction } from "../../actions/inventoryactions";

import { Modal, Button } from 'react-bootstrap';

import LoadingSpinner from '../Shared/LoadingSpinner';


const AddCrop = (props) => {

    const [genreSelection, setGenreSelection] = useState([]);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { state, dispatch } = useAppContext();

    const { token } = parseCookies();

    const { addToast } = useToasts();

    useEffect(() => {
        const fetchProductData = async () => {
            await listProductAction(token, dispatch);
        }
        fetchProductData();
    }, [])


    useEffect(() => {
        const fetchAgentData = async () => {
            await getAgentsAction(token, dispatch);
        }
        fetchAgentData();
    }, [])


    const onAddCrop = async (data) => {
        const InvBody = null;
        const body = {
            agentId: data.agent,
            productId: data.product,
            cropStartDate: data.cropStartDate,
            cropEndDate: data.cropEndDate,
            estimatedYield: data.estimatedYield,
            uomId: "7150C4DA-6057-EC11-A355-AC12030DA196"
        }
        try {

            await createCropAction(body, token, dispatch);
            handleClose();


        } catch {
        }
    }

    const handleClose = () => {

        reset({
            product: "", agent: "", cropStartDate: "", cropYieldDate: "", estimatedYield: "", unitOfMeasurement: "",
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
                            Add Harvest
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>
                                        Product:
                                    </label>
                                    <select {...register('product', { required: true })}
                                        className="dashbaord-category-select"

                                    >
                                        <option disabled>Select Product</option>

                                        {state.product.data && state.product.data?.map((product, index) => (
                                            <option key={index} value={product.id}>{product.name}</option>
                                        ))}

                                    </select>
                                    {errors["product"] && <span className="errorMessage">Please select product </span>}
                                </div>
                            </div>


                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>
                                        Agent:
                                    </label>
                                    <select {...register('agent', { required: true })}
                                        className="dashbaord-category-select"

                                    >
                                        <option disabled>Select Agent</option>

                                        {state.agents.data && state.agents.data?.map((agent, index) => (
                                            <option key={index} value={agent.id}>{agent.name}</option>
                                        ))}

                                    </select>
                                    {errors["agent"] && <span className="errorMessage">Please select agent </span>}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
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
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <label>
                                        <i className='bx bx-camera-land'></i>{" "}
                                        Product Description:
                                    </label>
                                    <input {...register('productDescription', { required: true })}
                                        type="text"
                                        className="form-control"
                                        placeholder="Description of the product"
                                    />
                                    {errors["productDescription"] && <span className="errorMessage">Please enter the product description</span>}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>
                                        <i className='bx bxs-calendar' ></i>{" "}
                                        Crop Start Date:
                                    </label>
                                    <input {...register('cropStartDate', { required: true })}
                                        type="date"
                                        className="form-control"

                                    />
                                    {errors["cropStartDate"] && <span className="errorMessage">Please enter the crop start date</span>}

                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>
                                        <i className='bx bxs-calendar' ></i>{" "}
                                        Crop End Date:
                                    </label>
                                    <input {...register('cropEndDate', { required: true })}
                                        type="date"
                                        className="form-control"

                                    />
                                    {errors["cropEndDate"] && <span className="errorMessage">Please enter the crop end date</span>}

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>
                                        <i className='bx bx-camera-land'></i>{" "}
                                        Future Quantity:
                                    </label>
                                    <input {...register('futureQuantity', { required: true })}
                                        type="text"
                                        className="form-control"
                                        placeholder="Future Quantity"
                                    />
                                    {errors["futureQuantity"] && <span className="errorMessage">Please enter the future quantity</span>}
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>
                                        Unit Of Measurement:
                                    </label>
                                    <select {...register('unitOfMeasurement', { required: true })}
                                        className="dashbaord-category-select">
                                        <option disabled>Select Measurement</option>

                                        <option>Kgs</option>
                                        <option>Ton</option>

                                    </select>
                                    {errors["unitOfMeasurement"] && <span className="errorMessage">Please select measurement </span>}
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>
                                        <i className='bx bx-camera-land'></i>{" "}
                                        Reason:
                                    </label>
                                    <input {...register('reason', { required: true })}
                                        type="text"
                                        className="form-control"
                                        placeholder="Reason"
                                    />
                                    {errors["reason"] && <span className="errorMessage">Please enter the reason for change</span>}
                                </div>

                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>
                                        <i className='bx bx-camera-land'></i>{" "}
                                        Yield Status:
                                    </label>
                                    <input {...register('yieldStatus', { required: true })}
                                        type="text"
                                        className="form-control"
                                        placeholder="Yield Status"
                                    />
                                    {errors["yieldStatus"] && <span className="errorMessage">Please enter Yield Status</span>}
                                </div>

                            </div>

                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <div className="add-listings-btn">
                            <Button onClick={handleSubmit(onAddCrop)}>Add Crop</Button>
                            <Button onClick={handleClose}>Close</Button>
                        </div>
                        <div className="flex-grow-1"></div>
                    </Modal.Footer>
                </form>
            </Modal>
            <Modal
                className="loadingmodal"
                show={state.agents.loading}
                backdrop="static"
                keyboard={false}
                centered
            >
                <LoadingSpinner />
            </Modal>
        </>
    );
}

export default AddCrop;
