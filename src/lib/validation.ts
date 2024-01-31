import { z } from "zod";


const requiredString = z.string().min(1, "Required");
export const numericRequiredString = requiredString.regex(
  /^\d+$/,
  "Must be a number"
);

export const numericValue = z.coerce.number({
  description: "Must be a numer",
});

export const userSchema = z.object({
  id: z.number(),
  firstName: requiredString.max(25),
  lastName: requiredString.max(25),
  email: z.string().max(50).email(),
  phoneNumber: numericRequiredString.min(10,"Number most be 10 digist long").max(
    10,
    "Number can't be longer than 10 digits"
  ),
  address: requiredString.max(50),
});

export const idSchema = numericRequiredString;
