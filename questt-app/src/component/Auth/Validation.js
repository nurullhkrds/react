import * as yup from 'yup';

export  const validationsRegistered=yup.object().shape({
    userName: yup
    .string()
    .min(4, 'Kullanıcı adı minunmum 3 karakter uzunluğunda olmalıdır')
    .required('Kullanıcı adı zorunludur'),
    password:yup.string().min(5,"Parolanız en az 5 karakterden oluşabilir."),
    passwordConfirm:yup.string().oneOf([yup.ref('password')],'Parolalar uyuşmuyor')
    .required("Parola zorunludur")
})



export  const validationsLogin=yup.object().shape({
    userName: yup
    .string()
    .min(4, 'Kullanıcı adı minunmum 3 karakter uzunluğunda olmalıdır')
    .required('Kullanıcı adı zorunludur'),
    password:yup.string().min(5,"Parolanız en az 5 karakterden oluşabilir.").required("Parola zorunludur"),

})