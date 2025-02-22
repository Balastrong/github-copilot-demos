import { getDatabaseClient } from "../lib/db";

export const getRestaurants = async () => {
  const db = getDatabaseClient();

  const restaurants = await db.query("SELECT * FROM restaurants");

  return restaurants;
};
