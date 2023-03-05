import React, { Component } from "react";


class CreateContent extends Component {
    render() {
        return (
            <>
                <h2>Create</h2>
                <form maction='/create_process' ethod="POST" onSubmit={function (e) {
                    e.preventDefault();

                    this.props.onSubmit(
                        console.log("title value:" + e.target.title.value),
                        console.log("content value:" + e.target.content.value)
                    );
                }.bind(this)}>
                    <fieldset>
                        <label>Create</label>
                        <p><input type='text' name='title' placeholder="Name"></input></p>
                        <label>Content</label>
                        <p><textarea name='content' placeholder="desc..." rows={15} cols={30}></textarea></p>
                        <input type='submit'></input>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default CreateContent;