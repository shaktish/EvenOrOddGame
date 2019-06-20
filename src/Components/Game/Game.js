import React from 'react';
import {connect} from 'react-redux';

// ACTION_CREATORS 
import {FetchDeckOfCardsActionCreators} from '../../Redux/ActionCreators/FetchDeckOfCardsActionCreators'
import {StartGameActionCreator, StopGameActionCreator} from '../../Redux/ActionCreators/SettingsActionCreator';

// COMPONENTS
import Instructions from '../Instructions/Instructions';
import DrawNextCard from '../DrawNextCard/DrawNextCard';

class Game extends React.Component {
    startGameLocalInit = () => {
        this.props.startGameHelper();  
        this.props.FetchDeckOfCardsHelper();      
    }
    render() {
        // console.log(this.props, 'PROPS FROM GAME.JS');

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
                {this.props.DeckOfCardsHelper.ErrorFetchDeckCardsStatus ? <p>Looks like there was a problem in getting cards.  Status Code: {this.props.DeckOfCardsHelper.ErrorFetchDeckCardsMsg} </p>: null}             
                {this.props.DeckOfCardsHelper.loader &&  !this.props.DeckOfCardsHelper.ErrorFetchDeckCardsStatus ? <div>Loading...</div> : null}
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
        startGameHelper : () => {dispatch(StartGameActionCreator())},
        stopGameHelper : () => {dispatch(StopGameActionCreator())},
        //FetchDeckOfCardsHelper : () => {FetchDeckOfCardsActionCreators(dispatch)}
        FetchDeckOfCardsHelper : () => {dispatch(FetchDeckOfCardsActionCreators())}
    }    
}

const connectorComponent = connect(mapStateToProps, mapDisptachToProps);


export default connectorComponent(Game); 