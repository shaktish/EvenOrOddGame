import React from 'react'; 
import {connect} from 'react-redux';
import { FetchNextCardActionCreator } from '../../Redux/ActionCreators/FetchNewCardActionCreator';

class DrawNextCard extends React.Component {    
    render(){
        return (
            <div>
                <button onClick={()=>{this.props.DrawNextCardHelper(this.props.DeckOfCardsReducer.deck_id)}}>Draw the next card</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state, '\n STATE FROM DRAWNEXTCARD');
    return state;
}

const mapDisptachToProps = (dispatch) => {
    return {
        DrawNextCardHelper : (id) => {FetchNextCardActionCreator(dispatch, id)}
    }
}
const connectorComponent = connect(mapStateToProps, mapDisptachToProps);

export default connectorComponent(DrawNextCard);