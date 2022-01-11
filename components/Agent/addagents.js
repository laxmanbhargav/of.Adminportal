import { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';

import { Modal, Button } from 'react-bootstrap';

import { parseCookies } from "nookies";

import { useAppContext } from "../../contexts/appcontext";

import LoadingSpinner from '../Shared/LoadingSpinner';

import { createAgentAction } from '../../actions/agentaction';

import { getAgentsAction } from "../../actions/agentaction";




const AddAgent = (props) => {

    const { token } = parseCookies();

    const { register, handleSubmit, reset, getValues } = useForm();

    const { state, dispatch } = useAppContext();

    const addAgentData = async (data) => {

        try {
            const body = {

                name: data.agentName,
                phone: data.phoneNumber,
                createdAt: new Date(),
                ModifiedAt: new Date(),

            }
            await createAgentAction(body, token, dispatch);

            handleClose();
        }
        catch (error) {

        }

    }

    const handleClose = () => {

        reset({
            agentName: "", phoneNumber: ""
        });
        props.onHide();
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
                            Add Agent
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>
                                    <i className="bx bx-briefcase-alt"></i>{" "}
                                    Agent Title:
                                </label>
                                <input {...register('agentName', { required: true })}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Agent Name"
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    <i className="bx bx-briefcase-alt"></i>{" "}
                                    Agent Phone Number:
                                </label>
                                <input {...register('phoneNumber', { required: true })}
                                    type="text"
                                    className="form-control"
                                    placeholder="Provide Phone Number"
                                />
                            </div>



                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleSubmit(addAgentData)}>Add Agent</Button>
                        <Button onClick={handleClose}>Close</Button>

                    </Modal.Footer>
                </form>
            </Modal>
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
}

export default AddAgent;
