import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import foldersDB from "../../fixtures/folders"

export default class Sidebar extends Component {
    render() {

        const navLinkList = foldersDB.map(function(item) {
            return <Nav.Link key={item.id}
                             href={'#' + item.title.toLowerCase()}
                             onClick={() => {this('#' + item.title.toLowerCase())}}>{item.title}</Nav.Link>
        }, this.props.updateHash)

        return (
            <Nav className="flex-column" style={{position: 'fixed'}}>
                { navLinkList }
            </Nav>
        )
    }
}