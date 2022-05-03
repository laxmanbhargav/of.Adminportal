import { useEffect, useState } from "react";

import { Button, Modal } from "react-bootstrap";

import { parseCookies } from "nookies";

import AddDc from './adddc';

import { useAppContext } from "../../contexts/appcontext";

import { getDcAction } from "../../actions/dcactions";

import LoadingSpinner from "../Shared/LoadingSpinner";

const ListDc = () => {

    const { token } = parseCookies();

    const { state, dispatch } = useAppContext();

    const [addModalShow, setAddModalShow] = useState(false);

    const [editModalShow, setEditModalShow] = useState(false);

    useEffect(() => {

        const getDcs = async () => {
            await getDcAction(token, dispatch);
        }
        getDcs();
    }, [])




    return (
        <>
            <section className="listings-area ptb-20 bg-f9f9f9 bgBackground min-vh-100">
                <div className="container bg-f9f9f9 pb-1">
                    <div className="listings-grid-sorting row align-items-center">
                        <div className="col-lg-5 col-md-6 result-count">
                            <p>
                                We found{" "}
                                <span className="count">
                                    {state.dc.data && state.dc.data.length}
                                </span>{" "}
                                dcs 
                            </p>
                        </div>
                    </div>
                    <div className="bookings-listings-box">
                        <Button className="m-3" variant="secondary" onClick={() => setAddModalShow(true)}>
                            + Add DC Details
                        </Button>

                        <AddDc
                            show={addModalShow}
                            onHide={() => { setAddModalShow(false) }}
                        />





                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr >
                                                <th>DC Code</th>
                                                <th>DC Name</th>
                                                <th>DC Address</th>
                                                <th>DC District</th>
                                                <th>DC City</th>
                                                <th>DC State</th>
                                                <th>DC Pincode</th>

                                            </tr>
                                        </thead>

                                        <tbody>
                                            {state.dc.data && state.dc.data.map((dc) => (

                                                <tr key={dc.id}>

                                                    <td className="details">
                                                        <span>
                                                            {dc.dcCode}
                                                        </span>
                                                    </td>
                                                    <td className="details">
                                                        <span>
                                                            {dc.name}
                                                        </span>
                                                    </td>
                                                    <td className="details">
                                                        <span>
                                                            {dc.address}
                                                        </span>
                                                    </td>
                                                    <td className="details">
                                                        <span>
                                                            {dc.district}
                                                        </span>
                                                    </td>
                                                    <td className="details">
                                                        <span>
                                                            {dc.city}
                                                        </span>
                                                    </td>
                                                    <td className="details">
                                                        <span>
                                                            {dc.state}
                                                        </span>
                                                    </td>
                                                    <td className="details">
                                                        <span>
                                                            {dc.postalCode}
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
                  show={state.dc.loading}
                backdrop="static"
                keyboard={false}
                centered
            >
                <LoadingSpinner />
            </Modal>

        </>
    );
};

export default ListDc;
