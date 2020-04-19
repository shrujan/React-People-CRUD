import React  from 'react';
import { connect } from 'react-redux';

import PeopleList from './PeopleList/PeopleLIst';
import CreateNew from './CreatePeople/CreatePeople';

const People = (props) => {
    props.fetchPeople
    return (
        <div>
            <div>
                Search
                <div className="create-new">
                    <CreateNew
                        submit={props.createNew}
                    ></CreateNew>
                </div>
            </div>
            <PeopleList
                People = {JSON.stringify(props.people)}
            ></PeopleList>


        </div>
    )
}   

const mapStateToProps = (state) => {
    
    return {
        people: state.People
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPeople: () => { dispatch({type: 'FETCH_PEOPLE'}) },
        createNew: (personData) => { dispatch({type: 'CREATE_NEW', data: personData}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(People);
