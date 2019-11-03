import { ClientOptions, Transport } from '@nestjs/microservices';

export const grpcClientOptions: ClientOptions = {
    transport: Transport.MQTT,
    options: {
        host: 'localhost',
        port: 1883,
    },
};