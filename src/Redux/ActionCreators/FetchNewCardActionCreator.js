import {drawNextCardApiWrapper} from '../../API/Api';
import {SuccessNextCardFetchDeckCards} from '../ActionType/ActionType';

const SuccessFetchNextCardActionCreator = (data) => {
    // console.log(data);
    return {
        type : SuccessNextCardFetchDeckCards,
        payload : data 
    }
}

export const FetchNextCardActionCreator = (id) =>  (dispatch) => {
    return fetch(drawNextCardApiWrapper + id + '/draw/?count=1')
        .then((response)=>{
            if(response.status !== 200) {
                console.log('Error', response.status)
            } else {
                return response.json()
                .then((json)=>{
                    dispatch(SuccessFetchNextCardActionCreator(json));                    
                })
            }
            
        })
}