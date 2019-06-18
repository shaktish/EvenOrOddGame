import React from 'react';
import {connect} from 'react-redux';

// ACTION TYPE
import {StartGame, StopGame} from '../../Redux/ActionType/ActionType';

// ACTION_CREATORS 
import {FetchDeckOfCardsActionCreators} from '../../Redux/ActionCreators/FetchDeckOfCardsActionCreators'

// COMPONENTS
import Instructions from '../Instructions/Instructions';
import DrawNextCard from '../DrawNextCard/DrawNextCard';

class Game extends React.Component {
    startGameLocalInit = () => {
        this.props.startGameHelper();  
        this.props.FetchDeckOfCardsHelpers();      
    }
    render() {
        //console.log(this.props, 'PROPS FROM GAME.JS');

        let gameContent;

        if (this.props.GameSettingHelper.gameIsOn) {            
            gameContent = <React.Fragment>
                <p>The Game is ON!</p>                        
                <DrawNextCard />
                <br />                                  
                <button onClick={this.props.stopGameHelper}>Cancel Game</button>  
             </React.Fragment>
        } else {
            gameContent = <React.Fragment>
                
                <p>A New Game Awaits</p>
                <button onClick={this.startGameLocalInit}>Start Game</button>
                <Instructions />
            </React.Fragment>
        }
        return (
            <div>
                <h2>Evens or Odds</h2>                
                {this.props.DeckOfCardsHelper.loader ? <div>Loading...</div> : null}
                {this.props.DeckOfCardsHelper.loader ? null : gameContent }                
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    //console.log(state, 'STATE FROM GAME.JS');
    return {
        GameSettingHelper : state.GameSettingReducer,
        DeckOfCardsHelper: state.DeckOfCardsReducer
    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        startGameHelper : () => {dispatch({type:StartGame})},
        stopGameHelper : () => {dispatch({type:StopGame})},
        FetchDeckOfCardsHelpers : () => {FetchDeckOfCardsActionCreators(dispatch)}
    }
    
}

const connectorComponent = connect(mapStateToProps, mapDisptachToProps);


export default connectorComponent(Game);