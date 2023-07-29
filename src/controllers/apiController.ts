import {Request, Response} from 'express';

export const ping = (req: Request, res: Response) => {
    res.json({
        pong: true
    });
}

export const random = (req: Request, res: Response) => {
    let randNumber :Number = Math.floor(Math.random() * 10);

    res.json({
        numberRandom: randNumber
    });
}

export const nome = (req: Request, res: Response) => {
    let nome :String = req.params.nome;

    //res.json({nome: nome});
    res.json({nome});
}