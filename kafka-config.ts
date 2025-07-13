import { Kafka } from 'kafkajs';

const kafkaConfig = {
  clientId: 'my-app',
  brokers: ['localhost:9092'],
  topic: 'test-topic',
};

export const kafka = new Kafka({
  clientId: kafkaConfig.clientId,
  brokers: kafkaConfig.brokers,
});

export const topic = kafkaConfig.topic;
