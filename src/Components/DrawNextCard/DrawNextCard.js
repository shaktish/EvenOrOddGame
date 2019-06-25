import React from 'react'; 
import {connect} from 'react-redux';
import { FetchNextCardActionCreator } from '../../Redux/ActionCreators/FetchNewCardActionCreator';
import {EvenActiveActionCreator, OddActiveActionCreator} from '../../Redux/ActionCreators/SettingsActionCreator';

import EvenOrOdd from '../EvenOrOdd/EvenOrOdd';
import Score from '../Score/Score';

class DrawNextCard extends React.Component { 
    state = {
        isOddActive : false,
        isEvenActive : false
    }

    oddToggler = () => {
        this.setState({
            isOddActive : true,
            isEvenActive : false
        });
        this.props.OddActiveStateHelper();
    }
    
    evenToggler = () => {
        
        this.setState({
            isOddActive : false,
            isEvenActive : true
        });
        this.props.EvenActiveStateHelper();
    }


    render(){
        
        let card;
        if(this.props.DeckOfCardsReducerHelper.cards) {
            let{image, suit, value} = this.props.DeckOfCardsReducerHelper.cards[0];
            card = 
            <div>
                <h2>{value} of {suit}</h2>
                <img src={image} alt={suit}/>
            </div>            
        }

        return (
            <div>
                <Score                
                    remaining = {this.props.DeckOfCardsReducerHelper.remaining }
                    score= {this.props.GameSettingReducerHelper.score}
                />
                <EvenOrOdd 
                    oddToggler={this.oddToggler}
                    evenToggler={this.evenToggler}
                    oddClass={this.state.isOddActive ? true : false}
                    evenClass={this.state.isEvenActive ? true : false}
                />
                <br />                
                <button onClick={(e)=>{this.props.DrawNextCardHelper(this.props.DeckOfCardsReducerHelper.deck_id)}}>Draw the next card</button>
                {card}
                
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state, '\n STATE FROM DRAWNEXTCARD, mapStateToProps');
    return {
        DeckOfCardsReducerHelper : state.DeckOfCardsReducer,
        GameSettingReducerHelper : state.GameSettingReducer
    };
}

const mapDisptachToProps = (dispatch) => {
    return {
        DrawNextCardHelper : (id) => {dispatch(FetchNextCardActionCreator(id))},
        EvenActiveStateHelper : () =>{dispatch(EvenActiveActionCreator())},
        OddActiveStateHelper : () =>{dispatch(OddActiveActionCreator())},
    }
}
const connectorComponent = connect(mapStateToProps, mapDisptachToProps);

export default connectorComponent(DrawNextCard);