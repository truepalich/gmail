import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Maillist from "./pages/Maillist";

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { hash: window.location.hash};
    // }

    state = {
        hash: window.location.hash
    }

    updateHash = (value) => {
        return this.setState({ hash: value })
    }

    getHash = () => {
        return this.state.hash;
    }

    render() {
        return (
            <div className="App">
                <Header updateHash={this.updateHash} />
                <Container fluid>
                    <Row>
                        <Col xs={2}>
                            <Sidebar updateHash={this.updateHash} />
                        </Col>
                        <Col xs={10}>
                            <Maillist getHash={this.getHash} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


