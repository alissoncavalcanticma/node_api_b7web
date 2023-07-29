import { Router } from "express";
import * as ApiController from "../controllers/apiController";

const router = Router();

router.get("/ping", ApiController.ping);

router.get("/random", ApiController.random);

router.get("/nome/:nome", ApiController.nome)

//===========================//

router.post("/frases", ApiController.createPhrase);

//router.get("/frases", ApiController.frases);

//router.get("/frase/:frase", ApiController.frase);

//router.put("/frase/:frase", ApiController.frase);

//router.delete("/frase/:frase", ApiController.frase);

export default router;