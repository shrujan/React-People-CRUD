
const PeopleState = {
    People: [{"id":1, "name":"hsr"}],
    Sorting: "asc"
}

const Reducer = (state = PeopleState, action) => {
    
    if (action.type === 'FETCH_PEOPLE') {
        return state.People;
    }

    if (action.type === 'CREATE_NEW') {
        console.log(action.data);
        let peopleList = [...state.People, action.data];

        return {
            ...state,
            People: peopleList
        }
    }

    return state

}

export default Reducer;