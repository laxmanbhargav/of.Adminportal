import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { useForm } from 'react-hook-form';


import { useAppContext } from '../../contexts/appcontext';

import { createFutureInventoryAction } from "../../actions/inventoryactions";

import { useToasts } from "react-toast-notifications";

import { listProductAction } from '../../actions/productactions';


const FutureInventory = () => {

    const [genreSelection, setGenreSelection] = useState([]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { state, dispatch } = useAppContext();

    const { token } = parseCookies();

    const { addToast } = useToasts();

  
    
    return (
        <>
            <div className="main-content d-flex flex-column">
                <div className="breadcrumb-area">
                    <h1>Future Inventory</h1>
                </div>

                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>

                                                <th>Name</th>
                                                <th>Product</th>
                                                <th>Quantity</th>
                                                <th>Agent</th>
                                                

                                            </tr>
                                        </thead>

                                        <tbody>
                                          

                                                    <td className="details">
                                                        <span>
                                                            Tomato
                                                        </span>
                                                    </td>
                                                    <td className="details">
                                                        <span>
                                                            Tomato
                                                        </span>
                                                    </td>
                                                    <td className="details">
                                                        <span>
                                                            100 Kgs
                                                        </span>
                                                    </td>
                                                    <td className="details">
                                                        <span>
                                                            Sandeep
                                                        </span>
                                                    </td>
                                           


                                        </tbody>
                                    </table>
                                </div>
            </div>
        </>
    );
}

export default FutureInventory;
