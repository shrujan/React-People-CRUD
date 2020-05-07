
import * as actions from '../Action/Action'

const PeopleState = {
    People: [{"id":1, "name":"hsr"}],
    Sorting: "asc"
}

const PeopleReducer = (state = PeopleState, action) => {
    
    if (action.type === actions.fetchPeople) {
        return state.People;
    }

    if (action.type === actions.createNew) {
        let peopleList = [...state.People, action.data];

        return {
            ...state,
            People: peopleList
        }
    }

    if (action.type === actions.editUser) {
        let peopleList = [ ...state.People ];
        console.log(peopleList);
        let personIndex = peopleList.findIndex((person) => {
            return action.data.id === person.id
        })

        peopleList[personIndex] = action.data;
        return {
            ...state,
            People: peopleList

        }
    }

    if (action.type === actions.deleteUser) {
        console.log(action.userId);
        let userList = [ ...state.People ];

        let index = userList.findIndex((user) => {
            return user.id === action.userId;
        });

        userList.splice(index, 1);
        return  {
            ...state,
            People: userList
        }
    }

    return state

}

export default PeopleReducer;