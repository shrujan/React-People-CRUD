import React, { Fragment }  from 'react';

import './Peoplelist.scss';


const generateDOM = (prop) => {
    let peopleDOM = null;
    let peopleList= JSON.parse(prop.People);
    peopleDOM = (
        peopleList.map((person, index) => {
                return <div className='people-data'
                        key={index}
                        >  
                            <div> {person.name} </div> 
                            <div>{person.address || 'Address'}</div>
                            <a href ='#' onClick={}>Edit</a>

                        </div>
                            
        })
    
    )
    return peopleDOM;
}

const Peoplelist = (prop) => {
    return (
        <div className="people-list-table">
            <div className="list-header">
                <div> Name </div>
                <div> Address </div>
                <div> Operations</div>
            </div>
            <div className="people-list">
                {generateDOM(prop)}
            </div>
            

        </div>
    )
}   



export default Peoplelist;