import * as yup from 'yup';

export  const validationsRegistered=yup.object().shape({
    email:yup
    .string()
    .email("Geçerli bir email giriniz.")
    .required("Zorunlu alan"),
    password:yup.string().min(5,"Parolanız en az 5 karakterden oluşabilir."),
    passwordConfirm:yup.string().oneOf([yup.ref('password')],'Parolalar uyuşmuyor')
    .required("Zorunlu alan")
})



export  const validationsLogin=yup.object().shape({
    email:yup
    .string()
    .email("Geçerli bir email giriniz.")
    .required("Zorunlu alan"),
    password:yup.string().min(5,"Parolanız en az 5 karakterden oluşabilir."),

})

