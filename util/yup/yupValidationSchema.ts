import * as yup from "yup";

export const checkoutSchema = yup.object().shape({
    customer: yup.object({
      name: yup.string().required(),
      lastname: yup.string().required(),
      email: yup.string().email().required(),
      address: yup.object({
        address1: yup.string().required(),
        address2: yup.string().nullable().notRequired(),
        city: yup.string().required(),
        state: yup.string().required(),
        zipCode: yup.string().required(),
      }),
    }),
    card: yup.object({
      number: yup.string().matches(/[0-9]+\s[0-9]+\s[0-9]+\s[0-9]/).min(19).max(19).required(),
      nameOnCard: yup.string().required(),
      expDate: yup.string()
        .required()
        .matches(/(0[1-9]|10|11|12)[/](20\d{2})/)
        .min(
          7,
          "DD/AAAA"
        ),
      cvc: yup.string().max(3).min(3).required(),
    })
  });