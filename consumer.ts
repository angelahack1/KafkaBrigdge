import { kafka, topic } from './kafka-config';

const consumer = kafka.consumer({ groupId: 'test-group' });

export const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: topic, fromBeginning: true });

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