import { db } from "./db";

export async function createUser(googleUserId, username) {
  try {
    const rows = await db.execute(
      "INSERT INTO user (google_id, username) VALUES (?, ?) RETURNING user.id",
      [googleUserId, username]
    );
    if (rows === null || rows.length === 0) {
      throw new Error("Unexpected error");
    }
    const user = {
      id: rows[0].id,
      googleUserId,
      username,
    };
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export async function getUserFromGoogleId(googleUserId) {
  try {
    const rows = await db.execute(
      "SELECT id, google_id, username FROM user WHERE google_id = ?",
      [googleUserId]
    );
    if (rows === null || rows.length === 0) {
      return null;
    }
    const row = rows[0];
    const user = {
      id: row.id,
      googleId: row.google_id,
      username: row.username,
    };
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

export async function createUserWithEmail(email) {
  try {
    const rows = await db.execute(
      "INSERT INTO user (email) VALUES (?) RETURNING user.id",
      [email]
    );
    if (rows === null || rows.length === 0) {
      throw new Error("Unexpected error");
    }
    const user = {
      id: rows[0].id,
      googleUserId,
      username,
    };
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export async function getUserFromEmail(email) {
  try {
    const rows = await db.execute(
      "SELECT id, google_id, email, username FROM user WHERE email = ?",
      [email]
    );
    if (rows === null || rows.length === 0) {
      return null;
    }
    const row = rows[0];
    const user = {
      id: row.id,
      googleId: row.google_id,
      email: row.email,
      username: row.username,
    };
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}
