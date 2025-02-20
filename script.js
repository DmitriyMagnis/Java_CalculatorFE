const screen = document.querySelector('.screen');
const button = document.querySelector('.buttons');

let inputState = "";

const backSpace = () => {
    inputState = inputState.slice(0, -1);
    screen.textContent = inputState || "0";
};

const remove = () => {
    inputState = "0";
    screen.textContent = inputState;
}

const evaluate = () => {
    if (!inputState) return;
    try {
        inputState = eval(inputState.replace("x", "*"));
        screen.textContent = inputState;
        inputState = String(inputState);
    } catch (e) {
        inputState = "";
        screen.textContent = "Error";
    };
}

const drawScreen = (value) => {
    inputState += value;
    screen.textContent = inputState;
}

const handleClick = (evt) => {
    if (!evt.target.classList.contains('btn')) return;

    const value = evt.target.textContent;
    switch (value) {
        case 'C':
            remove();
            break;
        case '⌫':
            backSpace();
            break;
        case '=':
            evaluate();
            break;
        default:
            drawScreen(value);
            break;
    }
}

button.addEventListener('click', handleClick)
