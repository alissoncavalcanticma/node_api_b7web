import {Request, Response} from 'express';
import { Phrase } from '../models/Phrase';

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

//===================================================//

export const createPhrase = async (req: Request, res: Response) => {
    let author: String = req.body.author;
    let txt:    String = req.body.txt;

    let newPhrase = await Phrase.create({author, txt});

    res.json({idNewPrase: newPhrase.id});
}