import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import AvailableInventory from '../../components/Inventory/availableinventory';
import AuthorizedContent from '../../components/Shared/authorizedcontent';
import { Tab, Nav, Row, Col, Card } from 'react-bootstrap';

const AddAvailableInventory= () => {
    return (
        <AuthorizedContent>

            <Navbar />
            <div className="main-content d-flex flex-column">

                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <AvailableInventory />
                                        </Tab.Pane>
                                        
                                    </Tab.Content>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Tab.Container>

                <div className="copyrights-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-6 col-md-6">
                            <p>
                                <i className="bx bx-copyright"></i>2020{" "}
                                <a href="#">Organic Fresco</a>. All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthorizedContent>
    );
};

export default AddAvailableInventory;
