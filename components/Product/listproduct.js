import { useEffect, useState } from "react";

import { Button, Modal } from "react-bootstrap";

import { parseCookies } from "nookies";

import AddProduct from './addproduct';

import { useAppContext } from "../../contexts/appcontext";

import { listProductAction } from "../../actions/productactions";

import LoadingSpinner from "../Shared/LoadingSpinner";

const ListProduct = () => {

    const { token } = parseCookies();

    const { state, dispatch } = useAppContext();

    const [addModalShow, setAddModalShow] = useState(false);

    const [editModalShow, setEditModalShow] = useState(false);

    useEffect(() => {

            const getProducts = async () => {
                await listProductAction(token, dispatch)
            }
            getProducts();
        
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
                                    {state.product.data && state.product.data.length}
                                </span>{" "}
                                Product 
                            </p>
                        </div>
                    </div>
                    <div className="bookings-listings-box">
                        <Button className="m-3" variant="secondary" onClick={() => setAddModalShow(true)}>
                            + Add a New Product
                        </Button>

                        <AddProduct
                            show={addModalShow}
                            onHide={() => { setAddModalShow(false) }}
                        />


                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>

                                                <th>Name</th>
                                                <th>Description</th>

                                            </tr>
                                        </thead>

                                        <tbody>
                                            {state.product.data && state.product.data.map((product) => (

                                                <tr key={product.id}>

                                                    <td className="details">
                                                        <span>
                                                            {product.name}
                                                        </span>
                                                    </td>
                                                    <td className="details">
                                                        <span>
                                                            {product.description}
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
                  show={state.product.loading}
                backdrop="static"
                keyboard={false}
                centered
            >
                <LoadingSpinner />
            </Modal>

        </>
    );
};

export default ListProduct;
