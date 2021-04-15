const states = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];

console.log(states.length);

const state = document.getElementById('state');

function statesOptions() {
    for (let index = 0; index < states.length; index += 1) {
        let options = document.createElement('option');
        options.innerHTML = states[index];
        state.appendChild(options);
    }
}

statesOptions();