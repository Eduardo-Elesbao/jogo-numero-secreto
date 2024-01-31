function checksIfTheKickHasValidValue(kick) {
    const number = +kick;

    if (invalidKick(number)) {
        elementKick.innerHTML += `<div>Valor inválido</div>`;

        return;
    }

    if (numberGreaterOrLessThanAllowedValue(number)) {
        elementKick.innerHTML += `
            <div>Valor inválido: Fale um número entre ${lowerValue} e ${highestValue}</div>
        `;

        return;
    }

    if (number === secretNumber) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${secretNumber}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    } else if (number > secretNumber) {
        elementKick.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `;
    } else {
        elementKick.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `;
    }

}

function invalidKick(number) {
    return Number.isNaN(number);
}

function numberGreaterOrLessThanAllowedValue(number) {
    return number > highestValue || number < lowerValue;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
});
