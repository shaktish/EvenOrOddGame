import {createStore} from 'redux';
import React from 'react';

const ReduxExample = () => {
    const initState = {
        counter : 0
      }
      
      const rootReducer = (state = initState, action) => {
        switch(action.type) {
            case 'ADD' : 
            return {
                ...state,
                counter : state.counter + 1
            }
            case 'SUB' : 
            return {
                ...state,
                counter : state.counter - 1
            }
            default : return state
        }
        
      }
      
      const MyStore = createStore(rootReducer);
      
      MyStore.subscribe(()=>{
        console.log(MyStore.getState())
      })
      MyStore.dispatch({type:'ADD'});
      MyStore.dispatch({type:'ADD'});
      MyStore.dispatch({type:'ADD'});

    return (
        <div>Sample</div>
    )
}



export default ReduxExample;