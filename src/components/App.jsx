import { useReducer } from 'react';
import reducer, {initialState} from '../state/reducer';
import MessageBoard from './MessageBoard';
import PublishMessage from './PublishMessages';
import AppContext from '../state/appContext';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const providerState = {
    state,
    dispatch
  }
  return (
    <AppContext.Provider value={{state, dispatch}}>
      
       <h2>Reaction</h2>
       <hr/>
       <PublishMessage />
       <hr />
       <MessageBoard />
    
    </AppContext.Provider>
  )
}

export default App
