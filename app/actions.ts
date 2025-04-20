"use server";

import { db } from "@/db";
import { waitlist } from "@/db/schema";
import { z } from "zod";

// Define validation schema using zod
export const waitlistSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;

// Server action for adding a user to the waitlist
export async function joinWaitlist(formData: WaitlistFormData) {
  try {
    // Validate the form data
    const validatedData = waitlistSchema.parse(formData);
    
    // Insert the user into the waitlist table
    await db.insert(waitlist).values({
      name: validatedData.name,
      email: validatedData.email,
    });
    
    return { success: true };
  } catch (error) {
    // Handle zod validation errors
    if (error instanceof z.ZodError) {
      const errors = error.errors.reduce((acc, err) => {
        const path = err.path[0] as string;
        acc[path] = err.message;
        return acc;
      }, {} as Record<string, string>);
      
      return { success: false, errors };
    }
    
    // Handle duplicate email error
    if (error instanceof Error && error.message.includes("duplicate key")) {
      return { 
        success: false, 
        errors: { email: "This email is already on the waitlist" } 
      };
    }
    
    // Handle other errors
    console.error("Waitlist submission error:", error);
    return { 
      success: false, 
      errors: { _form: "Something went wrong. Please try again." } 
    };
  }
}