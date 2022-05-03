import { useEffect, useState } from "react";

import { useForm } from 'react-hook-form';

import { Button, Modal } from "react-bootstrap";

import { parseCookies } from "nookies";

import { useAppContext } from "../../contexts/appcontext";

import { getDcAction } from "../../actions/dcactions";

import { getDcInventoryAction } from "../../actions/dcactions";

import LoadingSpinner from "../Shared/LoadingSpinner";

import { useRouter } from 'next/router';

const ListDc = () => {

    const { token } = parseCookies();

    const { query } = useRouter();

    const { state, dispatch } = useAppContext();

    const [addModalShow, setAddModalShow] = useState(false);

    const [editModalShow, setEditModalShow] = useState(false);

    const [inventoryName, setInventoryName] = useState("");

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    console.log("Hi");
    console.log(query);


    useEffect(() => {
        const getDcs = async () => {
            await getDcAction(token, dispatch);
        }
        getDcs();
    }, [])

    const handleSearch = async (e) => {
        setInventoryName(e.target.value);
        if (inventoryName.length > 0) {
          let data = _.filter(state.dc?.data, dc => { return dc.id })
        }   
      }
    



    return (
        <>
            <section className="listings-area ptb-20 bg-f9f9f9 bgBackground min-vh-100">
                <div className="container bg-f9f9f9 pb-1">
                    <div className="listings-grid-sorting row align-items-center">
                        <div className="col-lg-5 col-md-6 result-count">
                            <p>
                                We found{" "}
                                <span className="count">
                                    {state.dcinventory.data && state.dcinventory.data.length}
                                </span>{" "}
                                dcs
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>
                                <i className='bx bx-message-dots'></i>{" "}
                                Distribution Center:
                            </label>
                            <select {...register('distributionCenter', { required: true })}
                                className="dashbaord-category-select"

                            >
                                <option disabled>Select Distribution Center</option>

                                {state.dc.data && state.dc.data?.map((dc, index) => (
                                    <option key={index} value={dc.id}>{dc.name}</option>
                                ))}


                            </select>
                            {errors["distributionCenter"] && <span className="errorMessage">Please select distribution center </span>}
                        </div>
                    </div>

                    <div className="flex-grow-1"></div>
                </div>
            </section>

        </>
    );
};

export default ListDc;
