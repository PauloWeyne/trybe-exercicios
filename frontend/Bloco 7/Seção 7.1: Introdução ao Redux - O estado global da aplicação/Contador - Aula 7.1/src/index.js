const countAzul = document.getElementById('count-Azul');
const decButtonAzul = document.getElementById('dec-Azul');
const incButtonAzul = document.getElementById('inc-Azul');
const resetButtonAzul = document.getElementById('reset-Azul');
const decTenBtnAzul = document.getElementById('dec-two-Azul');
const incTenBtnAzul = document.getElementById('inc-two-Azul');

const countLaranja = document.getElementById('count-Laranja');
const decButtonLaranja = document.getElementById('dec-Laranja');
const incButtonLaranja = document.getElementById('inc-Laranja');
const resetButtonLaranja = document.getElementById('reset-Laranja');
const decTenBtnLaranja = document.getElementById('dec-two-Laranja');
const incTenBtnLaranja = document.getElementById('inc-two-Laranja');

const countVermelho = document.getElementById('count-Vermelho');
const decButtonVermelho = document.getElementById('dec-Vermelho');
const incButtonVermelho = document.getElementById('inc-Vermelho');
const resetButtonVermelho = document.getElementById('reset-Vermelho');
const decTenBtnVermelho = document.getElementById('dec-two-Vermelho');
const incTenBtnVermelho = document.getElementById('inc-two-Vermelho');

const countBranco = document.getElementById('count-Branco');
const decButtonBranco = document.getElementById('dec-Branco');
const incButtonBranco = document.getElementById('inc-Branco');
const resetButtonBranco = document.getElementById('reset-Branco');
const decTenBtnBranco = document.getElementById('dec-two-Branco');
const incTenBtnBranco = document.getElementById('inc-two-Branco');

// State
const INITIAL_STATE = {
    counterAzul: 0,
    counterLaranja: 0,
    counterVermelho: 0,
    counterBranco: 0,
}

// Reducer
const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
// Azul
        case "INCREASE_COUNTER_AZUL":
            return {
                counterAzul: state.counterAzul + 1,
                counterLaranja: state.counterLaranja,
                counterVermelho: state.counterVermelho,
                counterBranco: state.counterBranco,
            }
        case "DECREASE_COUNTER_AZUL":
            return {
                counterAzul: state.counterAzul - 1,
                counterLaranja: state.counterLaranja,
                counterVermelho: state.counterVermelho,
                counterBranco: state.counterBranco,
            }
        case "RESET_COUNTER_AZUL":
            return {
                counterAzul: state.counterAzul = 0,
                counterLaranja: state.counterLaranja,
                counterVermelho: state.counterVermelho,
                counterBranco: state.counterBranco,
            }
        case "INCREASE_TEN_AZUL":
            return {
                counterAzul: state.counterAzul + 2,
                counterLaranja: state.counterLaranja,
                counterVermelho: state.counterVermelho,
                counterBranco: state.counterBranco,
            }
        case "DECREASE_TEN_AZUL":
            return {
                counterAzul: state.counterAzul - 2,
                counterLaranja: state.counterLaranja,
                counterVermelho: state.counterVermelho,
                counterBranco: state.counterBranco,
            }
// Laranja
        case "INCREASE_COUNTER_Laranja":
            return {
                counterAzul: state.counterAzul,
                counterLaranja: state.counterLaranja + 1,
                counterVermelho: state.counterVermelho,
                counterBranco: state.counterBranco,
            }
        case "DECREASE_COUNTER_Laranja":
            return {
                counterAzul: state.counterAzul,
                counterLaranja: state.counterLaranja - 1,
                counterVermelho: state.counterVermelho,
                counterBranco: state.counterBranco,
            }
        case "RESET_COUNTER_Laranja":
            return {
                counterAzul: state.counterAzul,
                counterLaranja: state.counterLaranja = 0,
                counterVermelho: state.counterVermelho,
                counterBranco: state.counterBranco,
            }
        case "INCREASE_TEN_Laranja":
            return {
                counterAzul: state.counterAzul,
                counterLaranja: state.counterLaranja + 2,
                counterVermelho: state.counterVermelho,
                counterBranco: state.counterBranco,
            }
        case "DECREASE_TEN_Laranja":
            return {
                counterAzul: state.counterAzul,
                counterLaranja: state.counterLaranja - 2,
                counterVermelho: state.counterVermelho,
                counterBranco: state.counterBranco,
            }
// Vermelho
        case "INCREASE_COUNTER_VERMELHO":
            return {
                counterAzul: state.counterAzul,
                counterLaranja: state.counterLaranja,
                counterVermelho: state.counterVermelho + 1,
                counterBranco: state.counterBranco,
            }
        case "DECREASE_COUNTER_VERMELHO":
            return {
                counterAzul: state.counterAzul,
                counterLaranja: state.counterLaranja,
                counterVermelho: state.counterVermelho -1,
                counterBranco: state.counterBranco,
            }
        case "RESET_COUNTER_VERMELHO":
            return {
                counterAzul: state.counterAzul,
                counterLaranja: state.counterLaranja,
                counterVermelho: state.counterVermelho = 0,
                counterBranco: state.counterBranco,
            }
        case "INCREASE_TEN_VERMELHO":
            return {
                counterAzul: state.counterAzul,
                counterLaranja: state.counterLaranja,
                counterVermelho: state.counterVermelho + 2,
                counterBranco: state.counterBranco,
            }
        case "DECREASE_TEN_VERMELHO":
            return {
                counterAzul: state.counterAzul,
                counterLaranja: state.counterLaranja,
                counterVermelho: state.counterVermelho - 2,
                counterBranco: state.counterBranco,
            }
// Branco
        case "INCREASE_COUNTER_BRANCO":
            return {
                counterAzul: state.counterAzul,
                counterLaranja: state.counterLaranja,
                counterVermelho: state.counterVermelho,
                counterBranco: state.counterBranco + 1,
            }
        case "DECREASE_COUNTER_BRANCO":
            return {
                counterAzul: state.counterAzul,
                counterLaranja: state.counterLaranja,
                counterVermelho: state.counterVermelho,
                counterBranco: state.counterBranco - 1,
            }
        case "RESET_COUNTER_BRANCO":
            return {
                counterAzul: state.counterAzul,
                counterLaranja: state.counterLaranja,
                counterVermelho: state.counterVermelho,
                counterBranco: state.counterBranco = 0,
            }
        case "INCREASE_TEN_BRANCO":
            return {
                counterAzul: state.counterAzul,
                counterLaranja: state.counterLaranja,
                counterVermelho: state.counterVermelho,
                counterBranco: state.counterBranco + 2,
            }
        case "DECREASE_TEN_BRANCO":
            return {
                counterAzul: state.counterAzul,
                counterLaranja: state.counterLaranja,
                counterVermelho: state.counterVermelho,
                counterBranco: state.counterBranco - 2,
            }
        default:
            return state;
    }
}

// Store
const store = Redux.createStore(reducer);

// Actions
// Azul
const increaseCounterAzul = () => {
    store.dispatch({
        type: "INCREASE_COUNTER_AZUL",
    });
}
const decreaseCounterAzul = () => {
    store.dispatch({
        type: "DECREASE_COUNTER_AZUL",
    });
}
const increaseTenAzul = () => {
    store.dispatch({
        type: "INCREASE_TEN_AZUL",
    });
}
const decreaseTenAzul = () => {
    store.dispatch({
        type: "DECREASE_TEN_AZUL",
    });
}
const resetCounterAzul = () => {
    store.dispatch({
        type: "RESET_COUNTER_AZUL",
    });
}

// Laranja
const increaseCounterLaranja = () => {
    store.dispatch({
        type: "INCREASE_COUNTER_LARANJA",
    });
}
const decreaseCounterLaranja = () => {
    store.dispatch({
        type: "DECREASE_COUNTER_LARANJA",
    });
}
const increaseTenLaranja = () => {
    store.dispatch({
        type: "INCREASE_TEN_LARANJA",
    });
}
const decreaseTenLaranja = () => {
    store.dispatch({
        type: "DECREASE_TEN_LARANJA",
    });
}
const resetCounterLaranja = () => {
    store.dispatch({
        type: "RESET_COUNTER_LARANJA",
    });
}

// Vermelho
const increaseCounterVermelho = () => {
    store.dispatch({
        type: "INCREASE_COUNTER_VERMELHO",
    });
}
const decreaseCounterVermelho = () => {
    store.dispatch({
        type: "DECREASE_COUNTER_VERMELHO",
    });
}
const increaseTenVermelho = () => {
    store.dispatch({
        type: "INCREASE_TEN_VERMELHO",
    });
}
const decreaseTenVermelho = () => {
    store.dispatch({
        type: "DECREASE_TEN_VERMELHO",
    });
}
const resetCounterVermelho = () => {
    store.dispatch({
        type: "RESET_COUNTER_VERMELHO",
    });
}

// Branco
const increaseCounterBranco = () => {
    store.dispatch({
        type: "INCREASE_COUNTER_BRANCO",
    });
}
const decreaseCounterBranco = () => {
    store.dispatch({
        type: "DECREASE_COUNTER_BRANCO",
    });
}
const increaseTenBranco = () => {
    store.dispatch({
        type: "INCREASE_TEN_BRANCO",
    });
}
const decreaseTenBranco = () => {
    store.dispatch({
        type: "DECREASE_TEN_BRANCO",
    });
}
const resetCounterBranco = () => {
    store.dispatch({
        type: "RESET_COUNTER_BRANCO",
    });
}

countAzul.addEventListener("click", increaseCounterAzul);
decButtonAzul.addEventListener("click", decreaseCounterAzul);
incButtonAzul.addEventListener("click", increaseCounterAzul);
resetButtonAzul.addEventListener("click", resetCounterAzul);
incTenBtnAzul.addEventListener("click", increaseTenAzul);
decTenBtnAzul.addEventListener("click", decreaseTenAzul);

countLaranja.addEventListener("click", increaseCounterLaranja);
decButtonLaranja.addEventListener("click", decreaseCounterLaranja);
incButtonLaranja.addEventListener("click", increaseCounterLaranja);
resetButtonLaranja.addEventListener("click", resetCounterLaranja);
incTenBtnLaranja.addEventListener("click", increaseTenLaranja);
decTenBtnLaranja.addEventListener("click", decreaseTenLaranja);

countVermelho.addEventListener("click", increaseCounterVermelho);
decButtonVermelho.addEventListener("click", decreaseCounterVermelho);
incButtonVermelho.addEventListener("click", increaseCounterVermelho);
resetButtonVermelho.addEventListener("click", resetCounterVermelho);
incTenBtnVermelho.addEventListener("click", increaseTenVermelho);
decTenBtnVermelho.addEventListener("click", decreaseTenVermelho);

countBranco.addEventListener("click", increaseCounterBranco);
decButtonBranco.addEventListener("click", decreaseCounterBranco);
incButtonBranco.addEventListener("click", increaseCounterBranco);
resetButtonBranco.addEventListener("click", resetCounterBranco);
incTenBtnBranco.addEventListener("click", increaseTenBranco);
decTenBtnBranco.addEventListener("click", decreaseTenBranco);

store.subscribe(() => {
    const state = store.getState();
    console.log(state);

    countAzul.innerHTML = state.counterAzul;
    countLaranja.innerHTML = state.counterLaranja;
    countVermelho.innerHTML = state.counterVermelho;
    countBranco.innerHTML = state.counterBranco;
})