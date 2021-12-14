import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { Modal, Button } from 'react-bootstrap';

import { createNotificationAction } from '../../actions/notificationactions';

import { useAppContext } from "../../contexts/appcontext";


import LoadingSpinner from '../Shared/LoadingSpinner';


const AddAgent = (props) => {

    const { register, handleSubmit, reset, getValues } = useForm();

    const { state, dispatch } = useAppContext();


    const createUser = async (phone, name) => {
        
    }

    const addAgentData = async (data) => {

        try {
            const body = {

                name: data.agentName,
                phone: data.phoneNumber,
                createdAt: new Date(),
                ModifiedAt: new Date(),

            }

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
                                    Agent Name:
                                </label>
                                <input {...register('agentName', { required: true })}
                                    type="text"
                                    className="form-control"
                                    placeholder="Provide Agent Name"
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
