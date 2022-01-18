import { useEffect, useState } from "react";

import { Button, Modal } from "react-bootstrap";

import { parseCookies } from "nookies";

import AddCrop from './addcrop';

import { useAppContext } from "../../contexts/appcontext";

import { listCropAction } from "../../actions/cropactions";

import LoadingSpinner from "../Shared/LoadingSpinner";

const ListCrop = () => {

    const { token } = parseCookies();

    const { state, dispatch } = useAppContext();

    const [addModalShow, setAddModalShow] = useState(false);

    const [editModalShow, setEditModalShow] = useState(false);

    useEffect(() => {

        const getCrops = async () => {
            await listCropAction(token, dispatch)
        }
        getCrops();
    }, [])


    return (
        <>
            <section className="listings-area ptb-20 bg-f9f9f9">
                <div className="container bg-f9f9f9">
                    <div className="listings-grid-sorting row align-items-center">
                        <div className="col-lg-5 col-md-6 result-count">
                            <p>
                                We found{" "}
                                <span className="count">
                                    {state.crop.cropData && state.crop.cropData?.length}
                                </span>{" "}
                                Crops
                            </p>
                        </div>
                    </div>
                    <div className="bookings-listings-box">
                        <Button className="m-3" variant="secondary" onClick={() => setAddModalShow(true)}>
                            + Add a New Crop
                        </Button>

                        <AddCrop
                            show={addModalShow}
                            onHide={() => { setAddModalShow(false) }}
                        />


                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>

                                        <th>Agent</th>
                                        <th>Product</th>
                                        <th>Crop Start Date</th>
                                        <th>Crop End Date</th>
                                        <th>Estimated Yield</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {state.crop.cropData && state.crop.cropData?.map((crop) => (

                                        <tr key={crop.id}>

                                            <td className="details">
                                                <span>
                                                    {crop.agentId}
                                                </span>
                                            </td>
                                            <td className="details">
                                                <span>
                                                    {crop.productId}
                                                </span>
                                            </td>
                                            <td className="details">
                                                <span>
                                                    {crop.cropStartDate}
                                                </span>
                                            </td>
                                            <td className="details">
                                                <span>
                                                    {crop.cropEndDate}
                                                </span>
                                            </td>
                                            <td className="details">
                                                <span>
                                                    {crop.estimatedYield}
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
                show={state.crop.loading}
                backdrop="static"
                keyboard={false}
                centered
            >
                <LoadingSpinner />
            </Modal>

        </>
    );
};

export default ListCrop;
