import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .email({ message: "Email Address must be valid" })
    .min(1, { message: "Email Address is required" }),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters" }),
});
