import { useState, useEffect } from "react";

import { parseCookies } from "nookies";

import { useForm } from 'react-hook-form';

import { useAppContext } from '../../contexts/appcontext';

import { createDcAction } from "../../actions/dcactions";

import { getAgentsAction } from "../../actions/agentaction";

import { useToasts } from "react-toast-notifications";

import { Modal, Button } from 'react-bootstrap';

import LoadingSpinner from '../Shared/LoadingSpinner';


const AddDc = (props) => {

    const [genreSelection, setGenreSelection] = useState([]);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { state, dispatch } = useAppContext();

    const { token } = parseCookies();

    const { addToast } = useToasts();

    useEffect(() => {
        const getAgents = async () => {
            await getAgentsAction(token, dispatch)
        }
        getAgents();
    }, [])




    const handleClose = () => {

        reset({
            farmerName: "", sizeInAcres: "", agent: "", surveyNumber: "", village: "", mandal: "", district: "", state: "", pincode: ""
        });
        props.onHide();
    }



    const onAddDc = async (data) => {
        const body = {

            name: data.dcName,
            dcCode: "xxx-999-000",
            address: data.address,
            city: data.city,
            district: data.district,
            state: data.state,
            postalCode: data.pincode,
            createdAt: "2022-04-04"

        }

        try {

            await createDcAction(body, token, dispatch);
            console.log(body);
            console.log(token);
            handleClose();
        } catch {

        }
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
                            Add DC
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <label>
                                        <i className='bx bx-camera-land'></i>{" "}
                                        DC Name:
                                    </label>
                                    <input {...register('dcName', { required: true })}
                                        type="text"
                                        className="form-control"
                                        placeholder="Name of DC"
                                    />
                                    {errors["dcName"] && <span className="errorMessage">Please enter the dc name</span>}
                                </div>
                            </div>


                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <label>
                                        Address:
                                    </label>

                                    <input {...register('address', { required: true })}
                                        type="text"
                                        className="form-control"
                                        placeholder="DC Address"
                                    />
                                    {errors["address"] && <span className="errorMessage">Please enter the dc address</span>}

                                </div>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>
                                        <i className='bx bx-camera-land'></i>{" "}
                                        District:
                                    </label>
                                    <input {...register('district', { required: true })}
                                        type="text"
                                        className="form-control"
                                        placeholder="District"
                                    />
                                    {errors["district"] && <span className="errorMessage">Please enter District</span>}
                                </div>



                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>
                                        <i className='bx bx-camera-land'></i>{" "}
                                        City:
                                    </label>
                                    <input {...register('city', { required: true })}
                                        type="text"
                                        className="form-control"
                                        placeholder="City"
                                    />
                                    {errors["city"] && <span className="errorMessage">Please enter city</span>}
                                </div>



                            </div>
                        </div>



                        <div className="row">

                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>
                                        <i className='bx bx-camera-land'></i>{" "}
                                        State:
                                    </label>
                                    <input {...register('state', { required: true })}
                                        type="text"
                                        className="form-control"
                                        placeholder="State"
                                    />
                                    {errors["state"] && <span className="errorMessage">Please enter State</span>}
                                </div>



                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>
                                        <i className='bx bx-camera-land'></i>{" "}
                                        Pincode:
                                    </label>
                                    <input {...register('pincode', { required: true })}
                                        type="text"
                                        className="form-control"
                                        placeholder="Pincode"
                                    />
                                    {errors["pincode"] && <span className="errorMessage">Please enter Pincode</span>}
                                </div>



                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleSubmit(onAddDc)}>Add DC</Button>
                        <Button onClick={handleClose}>Close</Button>

                    </Modal.Footer>
                </form>
            </Modal>
            <Modal
                className="loadingmodal"
                show={state.dc.loading}
                backdrop="static"
                keyboard={false}
                centered
            >
                <LoadingSpinner />
            </Modal>
        </>
    );
}

export default AddDc;
