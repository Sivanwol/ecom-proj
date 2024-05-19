import * as z from "zod";

export const profileSchema = z.object({
    fullname: z
        .string()
        .min(3, { message: "full Name must be at least 3 characters" })
        .max(50, { message: "full Name must be at most 50 characters" }),
    email: z
        .string()
        .email({ message: "user email must be at valid email" }),
    mobile: z.coerce.number(),
    country: z.string().min(1, { message: "Please select a country" }),
    city: z
        .string()
        .min(2, { message: "city must be at least 2 characters" })
        .max(100, { message: "city must be at most 100 characters" }),
});

export const signInSchema = z.object({
    email: z
        .string()
        .email({ message: "user email must be at valid email" }),
    password: z
        .string()
        .min(3, { message: "user password must be at least 3 characters" })
        .max(22, { message: "user password must be at most 22 characters" }),
});

export const registerSchema = z.object({
    fullname: z
        .string()
        .min(3, { message: "full Name must be at least 3 characters" })
        .max(50, { message: "full Name must be at most 50 characters" }),
    email: z
        .string()
        .email({ message: "user email must be at valid email" }),
    password: z
        .string()
        .min(3, { message: "user password must be at least 3 characters" })
        .max(22, { message: "user password must be at most 22 characters" }),
    confirmPassword: z
        .string()
        .min(3, { message: "user password must be at least 3 characters" })
        .max(22, { message: "user password must be at most 22 characters" }),
    mobile: z.coerce.number(),
    country: z.string().min(1, { message: "Please select a country" }),
    city: z
        .string()
        .min(2, { message: "city must be at least 2 characters" })
        .max(100, { message: "city must be at most 100 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirm"],
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
export type SignInFormValues = z.infer<typeof signInSchema>;
export type ProfileFormValues = z.infer<typeof profileSchema>;