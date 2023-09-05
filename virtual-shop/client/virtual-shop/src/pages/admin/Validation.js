import * as yup from 'yup';




export const validationUpdate=yup.object().shape({
    title:yup
    .string()
    .required("Zorunlu alan"),
    description:yup
    .string()
    .required("Zorunlu Alan").min(5),
    price:yup.string().required("Zorunlu Alan")

})

