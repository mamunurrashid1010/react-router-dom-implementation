import React, { Component } from 'react';
import { withRouter  } from "react-router-dom"

class UrlParamPassValue extends Component {

    constructor({match}){
        super();
        this.state={
            id:match.params.id,
        }
    }

    render() {
        return (
            <div>
                <p>test</p>
                <h3>ID: {this.state.id}</h3>
            </div>
        );
    }
}

export default UrlParamPassValue;