import { useEffect, useState } from "react";

import { Button, Modal } from "react-bootstrap";

import { parseCookies } from "nookies";

import AddAgent from './addagents';

import { useAppContext } from "../../contexts/appcontext";

import { getAgentsAction } from "../../actions/agentaction";

import LoadingSpinner from "../Shared/LoadingSpinner";

const ListAgents = () => {

    const { token } = parseCookies();

    const { state, dispatch } = useAppContext();

    const [addModalShow, setAddModalShow] = useState(false);

    const [editModalShow, setEditModalShow] = useState(false);

    useEffect(() => {

            const getAgents = async () => {
                await getAgentsAction(token, dispatch)
            }
            getAgents();
        
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
                                    {state.agents.data && state.agents.data.length}
                                </span>{" "}
                                Agents on search criteria
                            </p>
                        </div>
                    </div>
                    <div className="bookings-listings-box">
                        <Button className="m-3" variant="secondary" onClick={() => setAddModalShow(true)}>
                            + Add a New Agent
                        </Button>

                        <AddAgent
                            show={addModalShow}
                            onHide={() => { setAddModalShow(false) }}
                        />


                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>

                                                <th>Name</th>
                                                <th>Phone</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {state.agents.data && state.agents?.data?.map((agent) => (

                                                <tr key={agent.id}>

                                                    <td className="details">
                                                        <span>
                                                            {agent.name}
                                                        </span>
                                                    </td>
                                                    <td className="details">
                                                        <span>
                                                            {agent.phone}
                                                        </span>
                                                    </td>


                                                    <td className="action">
                                                        <a
                                                            href="#"
                                                            className="default-btn danger"
                                                        >
                                                            <i className="bx bx-x-circle"></i>{" "}
                                                            Delete
                                                        </a>
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
                  show={state.agents.loading}
                backdrop="static"
                keyboard={false}
                centered
            >
                <LoadingSpinner />
            </Modal>

        </>
    );
};

export default ListAgents;
