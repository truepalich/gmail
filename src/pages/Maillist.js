import React, { Component } from 'react'
import {ListGroup} from "react-bootstrap"
import maillistDB from "../fixtures/maillist"

export default class Maillist extends Component {
    render() {

        let homePage, mailList;

        if (this.props.getHash() === '') {
            homePage = 'This is home page';
        }

        if (this.props.getHash() !== '') {
            mailList = maillistDB[this.props.getHash().replace('#', '')].map(function(item) {
                return <ListGroup.Item key={item.id}>{item.title} <br/>{item.body}</ListGroup.Item>
            })
        }

        return (
            <ListGroup>
                { mailList }
                { homePage }
            </ListGroup>
        )
    }
}