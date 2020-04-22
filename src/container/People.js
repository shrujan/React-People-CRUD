import React, { Component }  from 'react';
import { connect } from 'react-redux';

import PeopleList from '../component/People/PeopleList/PeopleLIst';
import CreateNew from '../component/People/CreatePeople/CreatePeople';
import './People.scss'

class People extends Component {

    getNewUserData(event) {
        event.preventDefault()
        const userDetails = {
            name: event.target.name.value,
            address: event.target.address.value,
            age: event.target.age.value,
            
        }
        this.props.createNew(userDetails);
        this.props.toggleModal();
    }  

    createNewUser() {
        console.log('Here')
        return(
            <div className="create-new-modal">
                    <CreateNew
                        submit={this.getNewUserData.bind(this)}
                        cancel= {this.props.toggleModal}
                    ></CreateNew>
                </div>
        )
    }

    render () {
        
        return (
            <div>
                <div>
                    Search
                    <span onClick={this.props.toggleModal} className='create-new-btn'>Create New</span>
                    
                </div>
                <PeopleList
                    People = {JSON.stringify(this.props.people)}
                ></PeopleList>

                { ( this.props.showModal === true ) ? this.createNewUser() : null}
                

            </div>
        )
    }
     
}   

const mapStateToProps = (state) => {
    console.log("*** ",state.People)
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
