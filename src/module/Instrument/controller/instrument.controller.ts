const router = require('express').Router();
import { InstrumentProcessor } from "../processor/instrument.processor";

let instrumentProcessor = new InstrumentProcessor();

router.get('/submit/:value', async (req: any, res: any) => {
    try {
        const result = await instrumentProcessor.processData(req.params.value);
        console.log("ss", result);
        res.send({ result: result });
    } catch (e) {

    }

})

module.exports = router;