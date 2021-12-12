import * as yup from "yup";
import { Validation } from "./validation";
export const contactSchema = yup.object({
  firstName: yup.string().required(Validation.firstName.required),
  email: yup.string().required(Validation.email.required),
  number: yup.string().required(Validation.number.required),
});
