import { validatePhone } from "validations-br";
import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(3, "Campo obrigatório").default(""),
  email: z.string().email("e-mail inválido").default(""),
  phone: z
    .string()
    .min(14, "Telefone inválido")
    .refine((value) => validatePhone(value?.replace(/\D/g, "")), {
      message: "Número de telefone inválido", // Custom message for invalid phone number
    })
    .default(""),
  zipCode: z.string().min(1).default(""),
  address: z.string().min(3).default(""),
  number: z.string().min(1).default(""),
});
