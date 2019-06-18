import {combineReducers} from 'redux';

// Import other Reducers
import GameSettingReducer from './GameSettingsReducer';
import DeckOfCardsReducer from './DeckOfCardsReducer';


const RootReducer = combineReducers({GameSettingReducer : GameSettingReducer, DeckOfCardsReducer : DeckOfCardsReducer})

export default RootReducer;