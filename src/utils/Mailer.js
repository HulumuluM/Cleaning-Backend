const amqp = require('amqplib');
const config = require('../config/RabbitMqConfig.json');

module.exports = async (msg) => {
    let connection = await amqp.connect(config.serverUrl || `amqp://localhost`);
    let channel = await connection.createChannel();

    await channel.assertQueue(config.queue, {
        durable: false
    });

    channel.sendToQueue(config.queue, Buffer.from(msg));
    console.log(msg);

    setTimeout(function() {
        connection.close();
    }, 500);

}