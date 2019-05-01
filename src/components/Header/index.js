import React, { Component } from 'react'
import logo from './logo.svg'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" className={'mb-3'} sticky="top">
                <Navbar.Brand href="#" onClick={() => { this.props.updateHash('')}}>
                    <img src={logo} className="App-logo" alt="logo" style={{height: '40px', width: '45px'}} />
                    React-Gmail
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: 'flex-end'}}>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}