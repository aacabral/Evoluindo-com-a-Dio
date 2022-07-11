const lista = [
    {
        name: 'sabão em pó',
        preço: 30,
    },
    {
        name: 'cereal',
        preço: 12,
    },
    {
        name: 'toalha',
        preço: 30
    },
];

const saldodisponivel = 100;

function calculasaldo(saldodisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log(' rodada ', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preço;
    }, saldodisponivel);
}

console.log(calculasaldo(saldodisponivel, lista));
