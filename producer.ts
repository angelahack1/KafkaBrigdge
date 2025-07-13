import { Kafka } from 'kafkajs';

// 1. Create the Kafka instance
const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9092'] // Replace with your broker's address
});

// 2. Create a producer
const producer = kafka.producer();

// 3. Create a topic and send messages
const runProducer = async () => {
  await producer.connect();

  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'Hello KafkaJS user 2!' },
      { value: 'This is another message 2.' },
    ],
  });

  console.log('Messages sent successfully!');
  await producer.disconnect();
};

runProducer().catch(console.error);