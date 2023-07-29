import { Router } from "express";

const router = Router();

router.get("/ping", (req, res) => {
    res.json({pong: true});
});

router.get("/random", (req, res) => {
    let randNumber :Number = Math.floor(Math.random() * 10);

    res.json({
        numberRandom: randNumber
    });
});

router.get("/nome/:nome", (req, res) => {
    let nome :String = req.params.nome;

    //res.json({nome: nome});
    res.json({nome});
})

export default router;