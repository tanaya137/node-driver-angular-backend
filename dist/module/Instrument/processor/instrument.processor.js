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
exports.InstrumentProcessor = void 0;
const mqtt = require('mqtt');
class InstrumentProcessor {
    processData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const client = yield mqtt.connect('mqtt://broker.hivemq.com');
                yield client.on('connect', function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        yield client.subscribe("instrument_data");
                        console.log("Instrument client has successfully subscribed!!");
                        yield client.on('message', function (topic, message) {
                            var fullMessage = message;
                            if (data === 's') {
                                if (message.toString().charAt(0) === 'S') {
                                    resolve(fullMessage.toString());
                                }
                            }
                            else if (data === 'd') {
                                resolve(fullMessage.toString());
                            }
                            else {
                                resolve(fullMessage.toString());
                            }
                        });
                    });
                });
            }));
        });
    }
}
exports.InstrumentProcessor = InstrumentProcessor;
//# sourceMappingURL=instrument.processor.js.map