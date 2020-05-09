import React from 'react';
import './Create-people.scss';



const CreateNew = (props) => {
    // console.log(props.modifyPerson('', 'hello'));
    console.log('hello create new ')

    let peopleForm = (
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

    if (props.edit !== null) {
        peopleForm = (
            <div className="create-people">
                <form onSubmit={(event) =>  props.submit(event, 'edit' ) } action="#">
                    <div className="row">
                        <input name="name" type ="text" onChange={ (event) => props.modify(event, 'name')} value={props.edit.name || ''} placeholder="Enter Name:"></input>
                    </div>
                    <div className="row">
                        <input name="address" type ="text" onChange={ (event) => props.modify(event, 'address')} value={props.edit.address || '' } placeholder="Enter Address:"></input>
                    </div>
                    <div className="row">
                        <input name="age" type ="text" onChange={() => {props.modify(event, 'age')} } value={props.edit.age || ''} placeholder="Enter Age:"></input>
                    </div>
                    <div className="row save-btn-container">
                        <input className="cancel" onClick={props.cancel} type="reset"  value="Cancel" />
                        <input className="save" type="submit"  value="Save" />
                    </div>
                </form>
            </div>
        )
    }
    
    return (
        peopleForm
    )   
}


// React Memo optimization for functionaal component. Execute if any props change not otherwise
export default React.memo(CreateNew);