import { Router } from "express";
const server = Router();
import {semaforo, diaSemana} from './services.js';

server.get('/semaforo/:cor', (req, resp) => {    
    
    let cor = req.params.cor;
    let a = semaforo(cor);

    resp.send({
        semaforo : a
    })
      
})

server.get('/diaSemana', (req, resp) => {

    let dia = Number(req.query.dia);
    let x = diaSemana(dia);

    resp.send({
        diaSemana : x
    })
})

export default server;