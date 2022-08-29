const dev = process.env.NODE_ENV !== "production";

export const socketServer = dev ? "ws://localhost:3000" : "wss://https://codekamp-anurodhyadav.vercel.app/"; 