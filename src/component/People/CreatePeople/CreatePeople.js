import React from 'react';
import './Create-people.scss'

const CreateNew = (props) => {
    return (
        <div className="create-people">
            <form onSubmit={ props.submit } action="#">
                <div className="row">
                    <input name="name" type ="text" placeholder="Enter Name:"></input>
                </div>
                <div className="row">
                    <input name="address" type ="text" placeholder="Enter Address:"></input>
                </div>
                <div className="row">
                    <input name="age" type ="text" placeholder="Enter Age:"></input>
                </div>
                <div className="row save-btn-container">
                    <input className="cancel" onClick={props.cancel} type="reset"  value="Cancel" />
                    <input className="save" type="submit"  value="Save" />
                </div>
            </form>
        </div>
    )   
}



export default CreateNew;