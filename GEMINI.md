# Gemini Project Documentation

## About the Project

This project implements a Kafka bridge using Node.js and TypeScript. It provides a simple producer and consumer to interact with a Kafka cluster.

## Getting Started

### Prerequisites

- Node.js
- npm
- Docker (for running Kafka)

### Installation

1. Clone the repository.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the Kafka cluster using the provided `docker-compose.yml` file:
   ```bash
   docker-compose up -d
   ```

## Usage

### Producer

The producer sends messages to a Kafka topic. To run the producer:

```bash
npx ts-node producer.ts
```

### Consumer

The consumer subscribes to a Kafka topic and prints the messages it receives. To run the consumer:

```bash
npx ts-node consumer.ts
```

## Testing

There are currently no tests for this project.
