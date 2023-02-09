import { createClient } from "redis";

// const redisClient = createClient();
const client = createClient();

export const putInRedis = async (key, value) => {
  // await client.connect();
  return client.set(String(key), JSON.stringify(value));
};

export const getFromRedis = async (key) => {
  // const client = await redisClient.connect();
  // await client.connect();
  const value = await client.get(key);
  return JSON.parse(value);
};

export const getAllFromRedis = async () => {
  const valuesSet = [];

  console.log("The client", client);

  await client.connect();

  console.log("The client again", client);

  for await (const key of client.scanIterator()) {
    // use the key!
    const value = await client.get(key);
    if (value) {
      valuesSet.push(JSON.parse(value));
    }
  }
  return valuesSet;
};

export const getAvailbleRoomFromRedis = async () => {
  const allRooms = await getAllFromRedis();

  return allRooms.filter((room) => !room.started && !room.joinedBy);
};
