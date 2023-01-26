const count = document.getElementById('count');
const decButton = document.getElementById('dec');
const incButton = document.getElementById('inc');
const resetButton = document.getElementById('reset');
const decTenBtn = document.getElementById('dec-ten');
const incTenBtn = document.getElementById('inc-ten');

// State
const INITIAL_STATE = {
    counter: 0,
}

// Reducer
const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "INCREASE_COUNTER":
            return {
                counter: state.counter + 1,
            }
        case "DECREASE_COUNTER":
            return {
                counter: state.counter - 1,
            }
        case "RESET_COUNTER":
            return {
                counter: state.counter = 0,
            }
        case "INCREASE_TEN":
            return {
                counter: state.counter + 10,
            }
        case "DECREASE_TEN":
            return {
                counter: state.counter - 10,
            }
        default:
            return state;
    }
}

// Store
const store = Redux.createStore(reducer);

// Actions
const increaseCounter = () => {
    store.dispatch({
        type: "INCREASE_COUNTER",
    });
}
const decreaseCounter = () => {
    store.dispatch({
        type: "DECREASE_COUNTER",
    });
}
const increaseTen = () => {
    store.dispatch({
        type: "INCREASE_TEN",
    });
}
const decreaseTen = () => {
    store.dispatch({
        type: "DECREASE_TEN",
    });
}
const resetCounter = () => {
    store.dispatch({
        type: "RESET_COUNTER",
    });
}

incButton.addEventListener("click", increaseCounter);
decButton.addEventListener("click", decreaseCounter);
resetButton.addEventListener("click", resetCounter);
incTenBtn.addEventListener("click", increaseTen);
decTenBtn.addEventListener("click", decreaseTen);

store.subscribe(() => {
    const state = store.getState();
    console.log(state);

    count.innerHTML = state.counter;
})