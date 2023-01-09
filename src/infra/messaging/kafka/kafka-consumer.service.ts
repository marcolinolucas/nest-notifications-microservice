import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';
import { KafkaConfig } from '@nestjs/microservices/external/kafka.interface';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    const kafkaConfig: KafkaConfig = {
      clientId: 'notifications',
      brokers: [process.env.KAFKA_BROKER as string],
    };

    if (process.env.NODE_ENV === 'production') {
      kafkaConfig.sasl = {
        mechanism: 'scram-sha-256',
        username: process.env.KAFKA_USERNAME as string,
        password: process.env.KAFKA_PASSWORD as string,
      };

      kafkaConfig.ssl = true;
    }

    super({
      client: kafkaConfig,
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
