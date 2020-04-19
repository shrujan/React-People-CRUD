
const PeopleState = {
    People: [{"id":1, "name":"hsr"}],
    Sorting: "asc"
}

const Reducer = (state = PeopleState, action) => {
    
    if (action.type === 'FETCH_PEOPLE') {
        return state.People;
    }

    return state

}

export default Reducer;