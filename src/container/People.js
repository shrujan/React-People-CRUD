import React, { Component }  from 'react';
import { connect } from 'react-redux';

import PeopleList from '../component/People/PeopleList/PeopleLIst';
import CreateNew from '../component/People/CreatePeople/CreatePeople';
import './People.scss';
import * as actions from '../Store/Action/Action'

class People extends Component {

    constructor(props) {
        super(props);
        this.id = 2;
        this.state = {
            editUserFlag: false,
            editUserObj: {}
            // filteredPeople: this.props.people
        }

        this.modifyData = this.modifyData.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.getNewUserData = this.getNewUserData.bind(this);
        this.editUsers = this.editUsers.bind(this);
    }

    getNewUserData(event, mode, id) {
        event.preventDefault()
        const userDetails = {
            id: this.id + "_"+ event.target.name.value,
            name: event.target.name.value,
            address: event.target.address.value,
            age: event.target.age.value,
            
        }
        this.id ++;
        if (mode !== 'edit'){
            this.props.createNew(userDetails);
        } else {
            let user = { ...this.state.editUserObj }
            this.props.editUser(user);
        }
        this.props.toggleModal();
    }  

    // add on change method here 
    modifyData(event, field) {
        let userObj = { ...this.state.editUserObj }
        userObj[field] = event.target.value;
        this.setState({
            ...this.state,
            editUserObj: userObj
        })
    }

    // -----------------------
    editUsers(userId) {
        let ppl = this.props.people;
        let people = [ ...ppl ];

        let peopleObj = people.find((ppl) => {
            return (ppl.id === userId)
        })

        this.setState({
            editUserFlag: true,
            editUserObj: peopleObj,
            searchParam: ''
        })

        this.props.toggleModal();
    }

    createNew() {
        this.setState({
            editUserFlag: false,
            editUserObj: {}
        })
        this.props.toggleModal();
    }

    deleteUser(userId) {
        console.log(userId)
        this.props.deleteUser(userId);
    }

    createNewUserComponent(userObj) {
        return(
            <div className="create-new-modal">
                    <CreateNew
                        submit={ this.getNewUserData }
                        cancel= { this.props.toggleModal }
                        edit={userObj !== null ? userObj : null}
                        modify = { this.modifyData }
                    ></CreateNew>
                </div>
        )
    }

    filterPersons = (event) => {
        console.log(event.target.value);
        // let peopleList = this.props.people;
        this.setState({
            ...this.state,
            searchParam: event.target.value
        })
    }

    render () {
        let peopleListData = this.props.people;

        if(this.state.searchParam !== '' && this.state.searchParam !== undefined) {
            peopleListData = peopleListData.filter((person) => {
                if (person.name.includes(this.state.searchParam)) {
                    return person
                }
            })
        }

        return (
            <div className= 'people-container'>
                <div className="people-operations">
                    <div className="search-container">    
                        <input typee="text" placeholder='Search Name' onChange={ this.filterPersons.bind(this) }></input>
                        <span className='clear-btn' >X</span>
                    </div>
                    <div className="create-new" onClick={this.createNew.bind(this)} className='create-new-btn'>Create New</div>
                    
                </div>
                <PeopleList
                    People = {JSON.stringify(peopleListData)}
                    edit={ this.editUsers.bind(this) }
                    delete = { this.deleteUser }
                ></PeopleList>

                { ( this.props.showModal === true ) ? this.createNewUserComponent(this.state.editUserFlag === true? this.state.editUserObj: null) : null}
                

            </div>
        )
    }
     
}   

const mapStateToProps = (state) => {
    return {
        people: state.PeopleReducer.People
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPeople: () => { dispatch({type: actions.fetchPeople}) },
        createNew: (personData) => { dispatch({type: actions.createNew, data: personData}) },
        editUser: (user) => { dispatch({ type: actions.editUser, data: user}) },
        deleteUser: (userId) => { dispatch({ type: actions.deleteUser, userId: userId}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(People);
