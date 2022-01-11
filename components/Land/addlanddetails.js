import { useState, useEffect } from "react";

import { parseCookies } from "nookies";

import { useForm } from 'react-hook-form';

import { useAppContext } from '../../contexts/appcontext';

import { createLandAction } from "../../actions/landactions";

import { getAgentsAction } from "../../actions/agentaction";

import { useToasts } from "react-toast-notifications";

import { Modal, Button } from 'react-bootstrap';

import LoadingSpinner from '../Shared/LoadingSpinner';


const AddLandDetails = (props) => {

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



    const onAddLand = async (data) => {
        const body = {

            agentId: data.agent,
            farmerName: data.farmerName,
            sizeInAcres: data.sizeInAcres,
            surveyNumber: data.surveyNumber,
            village: data.village,
            mandal: data.mandal,
            district: data.district,
            state: data.state,
            pincode: data.pincode,
            status: "Active"

        }

        try {

            await createLandAction(body, token, dispatch);
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
                            Add Land
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>
                                    <i className='bx bx-camera-land'></i>{" "}
                                    Farmer Name:
                                </label>
                                <input {...register('farmerName', { required: true })}
                                    type="text"
                                    className="form-control"
                                    placeholder="Name of the farmer"
                                />
                                {errors["farmerName"] && <span className="errorMessage">Please enter the farmer name</span>}
                            </div>



                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>
                                        Size in acres:
                                    </label>

                                    <input {...register('sizeInAcres', { required: true })}
                                        type="text"
                                        className="form-control"
                                        placeholder="Size of land in acres"
                                    />
                                    {errors["sizeInAcres"] && <span className="errorMessage">Please enter the size of land in acres</span>}

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

                                        {state.agents.data && state.agents.data?.map((agent) => (
                                            <option value={agent.id}>{agent.name}</option>
                                        ))}
                                    </select>
                                    {errors["agent"] && <span className="errorMessage">Please select agent </span>}
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>
                                        <i className='bx bx-camera-land'></i>{" "}
                                        Survey Number:
                                    </label>
                                    <input {...register('surveyNumber', { required: true })}
                                        type="text"
                                        className="form-control"
                                        placeholder="Survey Number"
                                    />
                                    {errors["surveyNumber"] && <span className="errorMessage">Please enter Survey Number</span>}
                                </div>



                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>
                                        <i className='bx bx-camera-land'></i>{" "}
                                        Village:
                                    </label>
                                    <input {...register('village', { required: true })}
                                        type="text"
                                        className="form-control"
                                        placeholder="Village"
                                    />
                                    {errors["village"] && <span className="errorMessage">Please enter Village</span>}
                                </div>



                            </div>
                        </div>

                        <div className="row">

                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>
                                        <i className='bx bx-camera-land'></i>{" "}
                                        Mandal:
                                    </label>
                                    <input {...register('mandal', { required: true })}
                                        type="text"
                                        className="form-control"
                                        placeholder="Mandal"
                                    />
                                    {errors["mandal"] && <span className="errorMessage">Please enter Mandal</span>}
                                </div>



                            </div>
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
                        <Button onClick={handleSubmit(onAddLand)}>Add land</Button>
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

export default AddLandDetails;
