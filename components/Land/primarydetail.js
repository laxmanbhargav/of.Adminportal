import { useState } from "react";
import { parseCookies } from "nookies";
import { useForm } from 'react-hook-form';


import { useAppContext } from '../../contexts/appcontext';

import { createLandAction } from "../../actions/landactions";

import { useToasts } from "react-toast-notifications";

const options = [
    {
        label: 'Action',
        value: 'Action'
    },
    {
        label: 'Adventure',
        value: 'Adventure'
    },
    {
        label: 'Crime',
        value: 'Crime'
    },
    {
        label: 'Thriller',
        value: 'Thriller'
    },
    {
        label: 'Drama',
        value: 'Drama'
    },
    {
        label: 'Romance',
        value: 'Romance'
    },
    {
        label: 'Scfi',
        value: 'Scfi'
    }
]
const PrimaryDetails = () => {

    const [genreSelection, setGenreSelection] = useState([]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { state, dispatch } = useAppContext();

    const { token } = parseCookies();

    const { addToast } = useToasts();


    const onAddLand = async (data) => {
        const body = {

                agentId: "6645E25B-0E51-EC11-A355-AC12030DA196", 
                farmerName: data.farmerName,
                sizeInAcres: data.sizeInAcres,
                surveyNumber: data.surveyNumber,
                village: data.village,
                mandal: data.mandal,
                district: data.district,
                state:data.state,
                pincode: data.pincode,
                status: "Active"
            
        }

        try {
            console.log("In try");
            console.log(body);
            await createLandAction(body, token, dispatch);
        } catch {
           console.log("In Catch");
        }
    }

    return (
        <>
            <div className="main-content d-flex flex-column">


                <div className="breadcrumb-area">
                    <h1>Land Details</h1>
                </div>

                <form >


                    <div className="row">
                        <div className="col-lg-6 col-md-6">
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

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>
                                    <i className="bx bx-duplicate"></i>{" "}
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

                    <div className="add-listings-btn">
                        <button type="submit" onClick={handleSubmit(onAddLand)}>Add Land</button>
                    </div>
                    <div className="flex-grow-1"></div>
                </form>

            </div>
        </>
    );
}

export default PrimaryDetails;
