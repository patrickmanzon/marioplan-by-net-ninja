const initState = {
    projects: [
        {
            title: 'Hello world',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex fugit, laudantium excepturi, quod temporibus adipisci facilis aliquid eos ipsum reprehenderit dolorum, dolores veniam placeat hic sunt? Libero, hic! Ea, itaque?',
            id: 2
        },
        {
            title: 'Hello There',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex fugit, laudantium excepturi, quod temporibus adipisci facilis aliquid eos ipsum reprehenderit dolorum, dolores veniam placeat hic sunt? Libero, hic! Ea, itaque?',
            id: 21
        },
        {
            title: 'Hello!',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex fugit, laudantium excepturi, quod temporibus adipisci facilis aliquid eos ipsum reprehenderit dolorum, dolores veniam placeat hic sunt? Libero, hic! Ea, itaque?',
            id: 23
        }
    ]   
}

const projectReducer = (state = initState, action) => {

    switch(action.type){
        case "CREATE_PROJECT":
            action.payload.id = Math.random()
            state.projects.push(action.payload)    
            break;
        case "ERROR_CREATING_PROJECT":
            return state;

        default:
            return state;
    }

    return state;
}

export default projectReducer;