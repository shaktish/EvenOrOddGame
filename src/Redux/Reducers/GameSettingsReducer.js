import {
    StartGame, 
    StopGame, 
    instructionsExpanded, 
    instructionsCollapsed,
    EvenActionType,
    OddActionType,
    SuccessNextCardFetchDeckCards

    } from '../ActionType/ActionType';

const initState = {
    gameIsOn : false,
    instructionsCollapsed : true,
    userChoice : null,
    score : 0,
    guess : null
    
}

const GameSettingsReducer = (state = initState, action) => {

    switch(action.type) {
        case StartGame : 
            return {
                ...state,
                gameIsOn : true
            }
        case StopGame :
            return {
                ...state,
                gameIsOn : false
            }
        case instructionsExpanded :
            return {
                ...state,
                instructionsCollapsed : false
            }
        case instructionsCollapsed :
            return {
                ...state,
                instructionsCollapsed : true
            }
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
            let updatedScore;

            if(state.userChoice === cardValueType) {                
                return {
                    ...state,
                    score : state.score + 1
                }
            } else {
                return state
            }
              
        default : return state      
    }
}

export default GameSettingsReducer;