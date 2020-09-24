import React from 'react';
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

class CommitteeHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: {}
        }
    }

    componentDidMount() {
        axios.get("/api/gear/list").then(res => {
            this.setState({
                content: res.data
            })
        })
    }

    render() {
        return (
            <div className="content">
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                committee home
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CommitteeHome;