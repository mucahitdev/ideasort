import * as Yup from "yup";


export const validationSchemaRegister = Yup.object({
    name: Yup.string().required("Zorunlu alan"),
    email: Yup.string().email("Geçersiz email").required("Zorunlu alan"),
    password: Yup.string().required("Zorunlu alan"),
    passwordAgain: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Şifreler eşleşmiyor")
        .required("Zorunlu alan"),
});

export const validationSchemaLogin = Yup.object({
    email: Yup.string().email("Geçersiz email").required("Zorunlu alan"),
    password: Yup.string().required("Zorunlu alan"),
});