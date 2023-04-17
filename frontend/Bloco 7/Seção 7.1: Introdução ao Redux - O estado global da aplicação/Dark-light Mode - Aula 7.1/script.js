const wrapper = document.getElementById('wrapper');
const body = document.getElementById('body')
const star = document.getElementById('star');
const button = document.getElementById('change_star');

const INITIAL_STATE = {
    theme: "sun",
    icon: "🌞",
}

// Criando reducer (executando actions):
const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "CHANGE_THEME":
            return {
                theme: state.theme === "sun" ? "moon" : "sun",
                icon: state.icon === "🌞" ? "🌝" : "🌞",
            }
        default:
            return state;
    }
}

// Criando store:
const store = Redux.createStore(reducer);
// console.log(store)

// Criando actions:
const changeTheme= () => {
    store.dispatch({ type: "CHANGE_THEME" });
}

// Speaker and listeners:

button.addEventListener("click", changeTheme);

store.subscribe(() => {
    const state = store.getState();
    console.log(state)

    body.className = state.theme;
    star.innerHTML = state.icon;
})