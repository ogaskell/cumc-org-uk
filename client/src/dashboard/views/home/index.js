import React from 'react';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Carousel from '../../../components/Carousel/Carousel';
import {aboutText, slides, membershipText} from './text';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: false
        }
    }

    componentDidMount() {
        axios.get('/api/index').then(res => {
            this.setState({
                content: res.data,
            })
        })
    }

    render() {
        return (
            <div className="content">
                <Container fluid>
                    <Row>
                        <Col md={8}>
                            <Card>
                                <Carousel slides={slides} />
                            </Card>
                        </Col>
                        <Col md={4} className="d-flex flex-column">
                            <Card className="flex-grow-1">
                                <Card.Body>
                                    <Card.Title>Welcome!</Card.Title>
                                    <Card.Subtitle>You are not signed in</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Row>
                                        <Col>
                                            <Button className="float-right">Login</Button>
                                            <Button className="float-right">Signup</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <h3>About Us</h3>
                                    <p>{aboutText}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <h3>Membership</h3>
                                    <p>{membershipText}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;