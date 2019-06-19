import {drawNextCardApiWrapper} from '../../API/Api';

const SuccessFetchNextCardActionCreator = (data) => {
    console.log(data);
    return {
        type : 'SuccessNextCardFetchDeckCards',
        data : data 
    }

}

export const FetchNextCardActionCreator = (dispatch, id) => {
    fetch(drawNextCardApiWrapper + id + '/draw')
        .then((response)=>{
            console.log(response)
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