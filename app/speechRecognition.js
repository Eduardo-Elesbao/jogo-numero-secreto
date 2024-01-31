const elementKick = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition;
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    kick = e.results[0][0].transcript;
    showKickOnScreen(kick);
    checksIfTheKickHasValidValue(kick);
}

function showKickOnScreen(kick) {
    elementKick.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${kick}</span>
    `;
}

recognition.addEventListener('end', () => recognition.start());