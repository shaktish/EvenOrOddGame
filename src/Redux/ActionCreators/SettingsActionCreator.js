// ACTION TYPE
import {StartGame, StopGame} from '../ActionType/ActionType';

export const StartGameActionCreator = () => {
    return {
        type : StartGame
    }
}

export const StopGameActionCreator = () => {
    return {
        type : StopGame
    }
}