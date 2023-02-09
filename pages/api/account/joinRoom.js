import { getAvailbleRoomFromRedis, putInRedis } from "../../utils/redis";

export default async function joinRoom(req, res) {
  if (req.method == "POST") {
    try {
      const { user } = req.body;

      const availableRooms = await getAvailbleRoomFromRedis();

      if (!availableRooms.length) {
        const randomId = Date.now();

        const roomInfo = {
          id: randomId,
          createdBy: user.name,
          createdAt: Date.now(),
          joinedBy: null,
          started: false,
        };

        await putInRedis(randomId, roomInfo);

        res
          .status(200)
          .send({ roomId: randomId, roomInfo: roomInfo, joining: false });
        return;
      }
      let selectedRoomToJoin = null;

      if (availableRooms.length === 1) {
        selectedRoomToJoin = availableRooms[0];
      } else {
        const randomRoomIndex = Math.max(
          0,
          Math.ceil(Math.random() * availableRooms.length - 1)
        );
        selectedRoomToJoin = availableRooms[randomRoomIndex];
      }

      const roomId = selectedRoomToJoin.id;

      const reservation = {
        ...selectedRoomToJoin,
        joinedBy: user.name,
        started: true,
      };

      await putInRedis(roomId, reservation);

      res.status(200).send({ roomId, roomInfo: reservation, joining: true });
    } catch (error) {
      console.error(error);
      res.status(401).send({ error: "Something went wrong" });
    }
  }
}
