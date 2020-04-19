import React from 'react';
import './Create-people.scss'

const CreateNew = () => {

  

    return (
        <div className="create-people">

            <div>
                <label>Name: </label> 
                <input type ="text" placeholder="Enter Name:"></input>
            </div>
            <div>
                <label>Address: </label> 
                <input type ="text" placeholder="Enter Address:"></input>
            </div>
            <div>
                <label>Age: </label> 
                <input type ="text" placeholder="Enter Age:"></input>
            </div>
            
            
        </div>
    )   
}



export default CreateNew;