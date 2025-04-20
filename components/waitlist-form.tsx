"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { joinWaitlist, waitlistSchema } from "@/app/actions";
import { WaitlistFormData } from "@/app/actions";

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Define form with react-hook-form and zod validation
  const form = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  // Handle form submission
  async function onSubmit(data: WaitlistFormData) {
    setIsSubmitting(true);
    setFormError(null);

    try {
      const result = await joinWaitlist(data);

      if (result.success) {
        setIsSuccess(true);
        form.reset();
      } else {
        // Handle form errors
        if (result.errors) {
          if (result.errors._form) {
            setFormError(result.errors._form);
          } else {
            Object.entries(result.errors).forEach(([key, value]) => {
              form.setError(key as keyof WaitlistFormData, { 
                type: "manual", 
                message: value 
              });
            });
          }
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-md">
      {isSuccess ? (
        <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
          <h3 className="text-lg font-medium text-green-900">You&apos;re on the list!</h3>
          <p className="mt-2 text-sm text-green-700">
            Thank you for joining our waitlist. We&apos;ll notify you when Voice Planner is ready!
          </p>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="jane@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {formError && (
              <div className="text-sm font-medium text-destructive">{formError}</div>
            )}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}