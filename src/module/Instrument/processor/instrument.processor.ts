const mqtt = require('mqtt');

export class InstrumentProcessor {
    public async processData(data: any): Promise<any> {
        return new Promise(async (resolve, reject) => {
            const client = await mqtt.connect('mqtt://broker.hivemq.com');
            await client.on('connect', async function () {
                await client.subscribe("instrument_data");
                console.log("Instrument client has successfully subscribed!!");
                await client.on('message', function (topic: string, message: string) {
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
                })
            })
        })
    }

}