import React, { Component }  from 'react';
import { connect } from 'react-redux';

import PeopleList from '../component/People/PeopleList/PeopleLIst';
import CreateNew from '../component/People/CreatePeople/CreatePeople';
import './People.scss'

class People extends Component {
    showModal() {
        alert('hi')
    }

    render () {
        return (
            <div>
                
                <div>
                    Search
                    <span onClick={this.showModal} className='create-new-btn'>Create New</span>

                    
                </div>
                <PeopleList
                    People = {JSON.stringify(this.props.people)}
                ></PeopleList>

                    <div className="create-new-modal">
                        <CreateNew
                            submit={this.props.createNew}
                        ></CreateNew>
                    </div>

            </div>
        )
    }
     
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
