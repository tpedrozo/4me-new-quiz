import { z } from "zod";
import { validatePhone } from "validations-br";

// Custom function to validate a non-empty string and a valid phone number
export const validateNonEmptyStringWithValidatePhone = (message: string) => {
  return z.string().refine(
    (value) => {
      const valueFormated = value?.replace(/\D/g, "");
      // Pass empty or undefined/null values
      if (value === "" || value === undefined || value === null) {
        return true;
      }

      // Validate the phone number using the external function
      return validatePhone(valueFormated as string);
    },
    { message }
  );
};
