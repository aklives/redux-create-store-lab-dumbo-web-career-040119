import reducer from './reducers/candyReducer'

export default function createStore(reducer) {

  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  };



  return {
    dispatch,
    getState
  };
};


function render() {
  const container = document.getElementById('container');
  container.textContent = store.getState().count;
}

let store = createStore()
store.dispatch({ type: '@@INIT' })
