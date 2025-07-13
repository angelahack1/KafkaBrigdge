import { kafka, topic } from './kafka-config';

const producer = kafka.producer();

export const runProducer = async () => {
  await producer.connect();

  await producer.send({
    topic: topic,
    messages: [
      { value: 'Hello KafkaJS user 2!' },
      { value: 'This is another message 2.' },
    ],
  });

  console.log('Messages sent successfully!');
  await producer.disconnect();
};

runProducer().catch(console.error);