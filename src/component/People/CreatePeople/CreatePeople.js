import React from 'react';
import './Create-people.scss'

const CreateNew = (props) => {
    return (
        <div className="create-people">

            <div className="row">
                <input type ="text" placeholder="Enter Name:"></input>
            </div>
            <div className="row">
                <input type ="text" placeholder="Enter Address:"></input>
            </div>
            <div className="row">
                <input type ="text" placeholder="Enter Age:"></input>
            </div>
            <div className="row save-btn-container">
                <input className="cancel" onClick={props.cancel} type="reset"  value="Cancel" />
                <input className="save" type="submit"  value="Save" />
            </div>
            
            
        </div>
    )   
}



export default CreateNew;