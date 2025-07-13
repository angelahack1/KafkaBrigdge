import { Kafka } from 'kafkajs';

// 1. Create the Kafka instance
const kafka = new Kafka({
  clientId: 'my-consumer',
  brokers: ['localhost:9092'] // Replace with your broker's address
});

// 2. Create a consumer
const consumer = kafka.consumer({ groupId: 'test-group' });

// 3. Subscribe to a topic and consume messages
const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        offset: message.offset,
        value: message.value?.toString(),
      });
    },
  });
};

runConsumer().catch(console.error);