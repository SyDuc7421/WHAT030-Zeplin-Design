import { z, TypeOf } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required feild." })
    .email("Invalid email address."),
  password: z
    .string({ required_error: "Password is required feild." })
    .min(8, "Password must have more than 8 characters.")
    .max(12, "Password must have less than 12 characters.")
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must including English letters, numbers, and special characters",
    ),
});

export const registerSchema = z
  .object({
    email: z
      .string({
        required_error: "Email is required feild.",
      })
      .email("Inavalid email address"),

    password: z
      .string({ required_error: "Password is required feild." })
      .min(8, "Password must have more than 8 characters.")
      .max(12, "Password must have less than 12 characters.")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must including English letters, numbers, and special characters",
      ),

    verify_password: z.string({
      required_error: "Verify password is required feild.",
    }),

    address: z.string().optional(),

    additional_address: z.string().optional(),

    contact: z.string().optional(),

    accept_policy: z.boolean({
      required_error: "Accep policy is required field.",
    }),

    allow_advertisement: z.boolean().optional(),
  })
  .refine((values) => values.password === values.verify_password, {
    path: ["verify_password"],
    message: "Password do not match.",
  });

export type loginType = TypeOf<typeof loginSchema>;
export type registerType = TypeOf<typeof registerSchema>;
