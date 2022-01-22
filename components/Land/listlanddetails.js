import { useEffect, useState } from "react";

import { Button, Modal } from "react-bootstrap";

import { parseCookies } from "nookies";

import AddLand from './addlanddetails';

import { useAppContext } from "../../contexts/appcontext";

import { getLandAction } from "../../actions/landactions";

import LoadingSpinner from "../Shared/LoadingSpinner";

const ListLand = () => {

    const { token } = parseCookies();

    const { state, dispatch } = useAppContext();

    const [addModalShow, setAddModalShow] = useState(false);

    const [editModalShow, setEditModalShow] = useState(false);

    useEffect(() => {

        const getLands = async () => {
            await getLandAction(token, dispatch);
        }
        getLands();
    }, [])




    return (
        <>
            <section className="listings-area ptb-20 bg-f9f9f9 bgBackground">
                <div className="container bg-f9f9f9">
                    <div className="listings-grid-sorting row align-items-center">
                        <div className="col-lg-5 col-md-6 result-count">
                            <p>
                                We found{" "}
                                <span className="count">
                                    {state.land.data && state.land.data.length}
                                </span>{" "}
                                lands 
                            </p>
                        </div>
                    </div>
                    <div className="bookings-listings-box">
                        <Button className="m-3" variant="secondary" onClick={() => setAddModalShow(true)}>
                            + Add Land Details
                        </Button>

                        <AddLand
                            show={addModalShow}
                            onHide={() => { setAddModalShow(false) }}
                        />





                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr >
                                                <th>Agent</th>
                                                <th>Farmer Name</th>
                                                <th>Size In Acres</th>

                                            </tr>
                                        </thead>

                                        <tbody>
                                            {state.land.data && state.land.data.map((land) => (

                                                <tr key={land.id}>

                                                    <td className="details">
                                                        <span>
                                                            {land.agentId}
                                                        </span>
                                                    </td>
                                                    <td className="details">
                                                        <span>
                                                            {land.farmerName}
                                                        </span>
                                                    </td>
                                                    <td className="details">
                                                        <span>
                                                            {land.sizeInAcres}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>

                    </div>

                    <div className="flex-grow-1"></div>
                </div>
            </section>
            <Modal
                className="loadingmodal"
                  show={state.land.loading}
                backdrop="static"
                keyboard={false}
                centered
            >
                <LoadingSpinner />
            </Modal>

        </>
    );
};

export default ListLand;
