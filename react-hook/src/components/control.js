import React, { Component } from "react";

class Control extends Component {

    render() {

        return (
            <div>
                <h1>Control</h1>
                <ul>
                    <li><a href="/create" onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangeMode('create');
                    }.bind(this)}>create</a></li>
                    <li><a href="/update">update</a></li>
                    <li><button>delete</button></li>
                </ul>
            </div>
        );
    }

}

export default Control;