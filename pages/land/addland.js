import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import PrimaryDetails from '../../components/Land/primarydetail';
import AuthorizedContent from '../../components/Shared/authorizedcontent';
import { Tab, Nav, Row, Col, Card } from 'react-bootstrap';

const AddLand= () => {
    return (
        <AuthorizedContent>

            <Navbar />
            <div className="main-content d-flex flex-column">
                <div className="breadcrumb-area">
                    <h1>Howdy, Admin!</h1>
                </div>

                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                    <Col sm={3}>
                            
                        </Col>
                        
                        <Col sm={9}>
                            <Card>
                                <Card.Body>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <PrimaryDetails />
                                        </Tab.Pane>
                                        
                                    </Tab.Content>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Tab.Container>



                <div className="flex-grow-1"></div>

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
            <Footer />
        </AuthorizedContent>
    );
};

export default AddLand;
