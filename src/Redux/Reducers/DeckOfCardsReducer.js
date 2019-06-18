import {SuccessFetchDeckCards, EnableLoader, DisableLoader} from '../ActionType/ActionType';

const initState = {
    deck_id : null,
    remaining : 0,
    loader : false
}

const DeckOfCardsReducer = (state = initState, action) => {
    
    switch(action.type) {
        case SuccessFetchDeckCards : 
            const {remaining, deck_id} = action.data;
            return {
                ...state,    
                remaining,
                deck_id
            }   
        case EnableLoader :             
            return {
                ...state,    
                loader : true
            } 
        case DisableLoader :             
            return {
                ...state,    
                loader : false
            } 
        default : return state      
    }
}

export default DeckOfCardsReducer;