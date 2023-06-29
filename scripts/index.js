function calcularMedia() {
    const notas = [];

    for (let i= 1; i <= 5; i++) {
        let nota = parseFloat(prompt(`Olá, Professor! Digite a nota ${i}:`));

        while (isNaN(nota) || nota < 0 || nota > 10) {
            alert("Ops! Por favor, digite um valor númerico válido entre 0 e 10.");
            nota = parseFloat(prompt(`Digite a nota ${i}:`));
        }

        notas.push(nota);
    }

    const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    const media = soma / notas.length;
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "De acordo com as notas computadas, a média do aluno(a) é " + media.toFixed(2) + ".";
    
    if (media >=6) {
        resultado.innerHTML += "Uhuuuu, parabéns. Está aprovado(a)!";
    } else {
        resultado.innerHTML += "Que pena, infelizmente não foi aprovado(a)!";
    }
    }