import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// Criando state:
const INITIAL_STATE = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
};

// Criando o reducer:
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NEXT_COLOR':
            return{
                ...state,
                index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
            };
        case 'PREVIOUS_COLOR':
            return {
                ...state,
                index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
            }
        default:
            return state;
    }
};
        
// Criando store:
const store = createStore(reducer, composeWithDevTools());

const nextAction = {
    type: 'NEXT_COLOR'
};

const previousAction = {
    type: 'PREVIOUS_COLOR'
};
        