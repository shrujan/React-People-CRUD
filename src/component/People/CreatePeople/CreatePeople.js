import React from 'react';
import './Create-people.scss'

const CreateNew = () => {

  

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
            <div className="row">
                <input className="save" type="submit"  value="Save" />
            </div>
            
            
        </div>
    )   
}



export default CreateNew;