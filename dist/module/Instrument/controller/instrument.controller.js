"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const instrument_processor_1 = require("../processor/instrument.processor");
let instrumentProcessor = new instrument_processor_1.InstrumentProcessor();
router.get('/submit/:value', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield instrumentProcessor.processData(req.params.value);
        console.log("ss", result);
        res.send({ result: result });
    }
    catch (e) {
    }
}));
module.exports = router;
//# sourceMappingURL=instrument.controller.js.map