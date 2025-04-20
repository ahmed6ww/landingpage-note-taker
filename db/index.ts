import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// Mock implementation for development/demo purposes
const createMockDb = () => {
  // In-memory storage for waitlist entries
  const waitlistEntries: any[] = [];

  return {
    insert: (table: any) => ({
      values: (data: any) => {
        // Check for duplicate email
        if (waitlistEntries.some(entry => entry.email === data.email)) {
          const error = new Error("duplicate key value violates unique constraint");
          throw error;
        }
        
        // Add entry to in-memory storage
        waitlistEntries.push({
          id: waitlistEntries.length + 1,
          ...data,
          createdAt: new Date()
        });
        
        return Promise.resolve();
      }
    }),
    // Add more mock methods as needed
  };
};

// Function to initialize the database client
export const createClient = () => {
  // For production, you would retrieve this from environment variables
  const connectionString = process.env.DATABASE_URL;
  
  // If no connection string is provided, use the mock implementation
  if (!connectionString) {
    console.warn("No DATABASE_URL provided, using mock database implementation");
    return createMockDb();
  }

  try {
    // Initialize the neon client with the connection string
    const sql = neon(connectionString);

    // Return the drizzle client with our schema
    return drizzle(sql, { schema });
  } catch (error) {
    console.error("Error creating database client:", error);
    return createMockDb();
  }
};

// Create a database instance for use throughout the app
export const db = createClient();