import {
    EvenActionType,
    OddActionType,
    SuccessNextCardFetchDeckCards

} from '../ActionType/ActionType';


const initState = {
    userChoice : null,
    score : 0,
    
}
    
const GameStateReducer = (state = initState, action) => {

    switch(action.type) {
        case EvenActionType :
            return {
                ...state,
                userChoice : 'even'
            }      
        case OddActionType :
            return {
                ...state,
                userChoice : 'odd'
            }    

        case SuccessNextCardFetchDeckCards :
            
            // console.log(action.payLoad, '\n from gamescore action type');                
            let cardValueType = window.parseInt(action.payload.cards[0].value, 10) % 2 === 0 ? 'even' : 'odd' ;
            let updatedScore = state.score;

            if(state.userChoice === cardValueType) {
                updatedScore += 1;
            }
            return {
                ...state,
                score : updatedScore
            }   
        default : return state      
    }
}

export default GameStateReducer;