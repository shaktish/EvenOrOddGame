import {SuccessFetchDeckCards, /*ErrorFetchDeckCards,*/} from '../ActionType/ActionType';
import {apiWrapper} from '../../API/Api';

import {EnableLoaderActionCreator, DisableLoaderActionCreator} from './LoaderActionCreator'

const SuccessFetchDeckOfCardsActionCreator = (data) => {
    return {
        type: SuccessFetchDeckCards,
        data : data
    }
}


export const FetchDeckOfCardsActionCreators = (dispatch) => {
    // INITALIZE LOADER
    dispatch(EnableLoaderActionCreator());

    // FETCH DECKOFCARDS API
    fetch(apiWrapper)
        .then(response=>{
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
              } else {
                return response.json().then(data => { 
                    console.log(data, '\n RESPONSE -> FETCH DECK OF CARDS');
                    dispatch(DisableLoaderActionCreator());
                    dispatch(SuccessFetchDeckOfCardsActionCreator(data));                    
                }) 
              }
              
        }).catch(function(err) {
            console.log('Fetch Error :-S', err);
        });        
}