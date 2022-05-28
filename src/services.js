export function semaforo (cor){
    let msg="";
    if(cor === "verde"){
        msg="pode passar";
    }
    else if(cor === "vermelho"){
        msg="aguarde";
    }
    else{
        msg="inválido";
    }
    return msg;
}

export function diaSemana (dia) {
    let msg="";

    if(dia === 0){
        msg="hoje é domingo";
    }
    else if(dia === 1){
        msg="hoje é segunda-feira";
    }
    else if(dia === 2){
        msg="hoje é terça-feira";
    }
    else if(dia === 3){
        msg="hoje é quarta-feira";
    }
    else if(dia === 4){
        msg="hoje é quinta-feira";
    }
    else if(dia === 5){
        msg="hoje é sexta-feira";
    }
    else if(dia === 6){
        msg="hoje é sábado";
    }

    return msg;
}

export function fatorial (num) {
    let soma = 1;
    for (let i = 1; i <= num; i ++) {
        soma *= i;
    }
    return soma;
}
export function sequenciaPar (numero) {
    let x = [];
    for(let i = 0; i <= numero; i++) {
        i % 2 == 0
    }
}

