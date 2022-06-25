// Action types
const ITEMS_RETRIEVED = "itemsRetrieved";

// Action creators
export const itemsRetrieved = (items) => {
    return {
        type: ITEMS_RETRIEVED,
        payload: items
    }
}

export default function reducer(state = [], action){
    switch (action.type){
        case ITEMS_RETRIEVED:
            return [
                ...action.payload
            ]
        default:
            return state;
    }
}