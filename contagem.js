let qtdAlunos = 10; //quantidade total de alunos

//percorrer de 0 até quantidade total de alunos
for (let i = 0; i < qtdAlunos; i++) {
    if (i == 0) {
        console.log("O número é ZERO.");
    } else if (i % 2 == 0) {
        console.log(`O número ${i} é PAR.`);
    } else if (i % 2 == 1) {
        console.log(`O número ${i} é ÍMPAR.`);
    }
}