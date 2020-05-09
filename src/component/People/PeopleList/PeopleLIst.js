import React  from 'react';

import './Peoplelist.scss';

const classList = (person) => {
    let classNames = 'people-data';

    if ((person.age === undefined || person.age === '')|| 
        (person.address === undefined || person.address === '') || 
        (person.name === undefined || person.name === '')) {
        classNames += " warning"
    }

    console.log('class' , classNames);


    return classNames;
}

const generateDOM = (prop) => {
    let peopleDOM = null;
    let peopleList = JSON.parse(prop.People);
    peopleDOM = (
        peopleList.map((person, index) => {
                return <div className={classList(person)}
                        key={index}
                        >  
                            <div> {person.name} </div> 
                            <div>{person.address || 'N/A'}</div>
                            <div>{person.age || 'N/A'}</div>
                            <a href ='#' className='edit-btn' onClick={ () => prop.edit(person.id) }>Edit</a>
                            <span className="delete-action" onClick={ () => { prop.delete( person.id )} }>X</span>
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
                <div> Age</div>
                <div> Operations</div>
            </div>
            <div className="people-list">
                {generateDOM(prop)}
            </div>
            

        </div>
    )
}   



export default Peoplelist;