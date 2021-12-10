import { useState } from "react";
import { parseCookies } from "nookies";
import { useForm } from 'react-hook-form';


import { useAppContext } from '../../contexts/appcontext';

import { createAvailableInventoryAction } from "../../actions/inventoryactions";

import { useToasts } from "react-toast-notifications";


const AvailableInventory = () => {

    const [genreSelection, setGenreSelection] = useState([]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { state, dispatch } = useAppContext();

    const { token } = parseCookies();

    const { addToast } = useToasts();


    const onAddAvailableInventory = async (data) => {
        const body = {
            name: data.name,
            description: data.description,
            productId: "75610883-D955-EC11-A355-AC12030DA196",
            quantity: data.quantity,
            uomId: "7150C4DA-6057-EC11-A355-AC12030DA196",
            agentId: "6645E25B-0E51-EC11-A355-AC12030DA196",
        }
        try {
            await createAvailableInventoryAction(body, token, dispatch);
        } catch {
            console.log("In Catch");
        }
    }

    return (
        <>
            <div className="main-content d-flex flex-column">
                <div className="breadcrumb-area">
                    <h1>Future Inventory</h1>
                </div>

                <form >


                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>
                                    <i className='bx bx-camera-land'></i>{" "}
                                    Name:
                                </label>
                                <input {...register('name', { required: true })}
                                    type="text"
                                    className="form-control"
                                    placeholder="Name of the product"
                                />
                                {errors["name"] && <span className="errorMessage">Please enter the name</span>}
                            </div>



                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>
                                    Product:
                                </label>
                                <select {...register('product', { required: true })}
                                    className="dashbaord-category-select"

                                >
                                    <option disabled>Select Product</option>

                                    <option>Tomato</option>
                                    <option>Roma Tomato</option>

                                </select>
                                {errors["product"] && <span className="errorMessage">Please select product </span>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>
                                    <i className='bx bx-futureinventory' ></i>{" "}
                                    Description:
                                </label>
                                <textarea
                                    {...register('description', { required: true })}
                                    cols="30"
                                    rows="7"
                                    className="form-control"
                                    placeholder="Product Description"

                                ></textarea>
                                {errors["description"] && <span className="errorMessage">Please enter the description</span>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>
                                    <i className='bx bx-camera-inventory'></i>{" "}
                                    Quantity:
                                </label>
                                <input {...register('quantity', { required: true })}
                                    type="text"
                                    className="form-control"
                                    placeholder="Quantity"
                                />
                                {errors["quantity"] && <span className="errorMessage">Please enter the quantity</span>}
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>
                                    Unit Of Measurement:
                                </label>
                                <select {...register('unitOfMeasurement', { required: true })}
                                    className="dashbaord-category-select"

                                >
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
                                    Agent:
                                </label>
                                <select {...register('agent', { required: true })}
                                    className="dashbaord-category-select"

                                >
                                    <option disabled>Select Agent</option>

                                    <option>Murali</option>
                                    <option>Krishna</option>


                                </select>
                                {errors["agent"] && <span className="errorMessage">Please select agent </span>}
                            </div>
                        </div>
                    </div>
                    
                    <div className="add-listings-btn">
                        <button type="submit" onClick={handleSubmit(onAddAvailableInventory)}>Add Available Inventory</button>
                    </div>
                    <div className="flex-grow-1"></div>
                </form>
            </div>
        </>
    );
}

export default AvailableInventory;
