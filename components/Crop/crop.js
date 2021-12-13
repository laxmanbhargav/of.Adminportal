import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { useForm } from 'react-hook-form';


import { useAppContext } from '../../contexts/appcontext';

import { createCropAction } from "../../actions/cropactions";

import { useToasts } from "react-toast-notifications";

import { listProductAction } from '../../actions/productactions';


const Crop = () => {

    const [genreSelection, setGenreSelection] = useState([]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { state, dispatch } = useAppContext();

    const { token } = parseCookies();

    const { addToast } = useToasts();

    useEffect(() => {
        const fetchProductData = async () => {
            await listProductAction(token, dispatch);
        }
        fetchProductData();
    }, [])


    const onAddCrop = async (data) => {
        const body = {
            agentId: "6645E25B-0E51-EC11-A355-AC12030DA196",
            productId: data.product,
            cropStartDate: data.cropStartDate,
            cropEndDate: data.cropEndDate,
            estimatedYield: data.estimatedYield,
            uomId: "7150C4DA-6057-EC11-A355-AC12030DA196"
        }
        try {
            await createCropAction(body, token, dispatch);
        } catch {
            console.log("In Catch");
        }
    }

    return (
        <>
            <div className="main-content d-flex flex-column">
                <div className="breadcrumb-area">
                    <h1>Crop</h1>
                </div>

                <form >


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

                                    {state.product.data && state.product.data?.map((product) => (
                                        <option value={product.id}>{product.name}</option>
                                    ))}

                                </select>
                                {errors["product"] && <span className="errorMessage">Please select product </span>}
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
                                    Crop Yield Date:
                                </label>
                                <input {...register('cropYieldDate', { required: true })}
                                    type="date"
                                    className="form-control"

                                />
                                {errors["cropYieldDate"] && <span className="errorMessage">Please enter the crop yield date</span>}

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>
                                    <i className='bx bx-camera-land'></i>{" "}
                                    Estimated Yield:
                                </label>
                                <input {...register('estimatedYield', { required: true })}
                                    type="text"
                                    className="form-control"
                                    placeholder="Estimated Yield"
                                />
                                {errors["estimatedYield"] && <span className="errorMessage">Please enter the estimated crop yield</span>}
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


                    <div className="add-listings-btn">
                        <button type="submit" onClick={handleSubmit(onAddCrop)}>Add Crop</button>
                    </div>
                    <div className="flex-grow-1"></div>
                </form>
            </div>
        </>
    );
}

export default Crop;
