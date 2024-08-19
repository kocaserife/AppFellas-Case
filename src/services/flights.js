import client from "./client";

export const getFlights = async () => {
  const res = await client.get("http://localhost:5000/api/flights");
  return res.data;
};
