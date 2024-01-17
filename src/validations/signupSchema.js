import { object, ref, string } from 'yup'

export const signupSchema = object().shape({
    email: string()
        .required({"empty_email": "El email es requerido"})
        .email({"email_format": "Formato de email incorrecto"}),
    
    password: string()
    .min(6, {"password_format": "La constraseña debe tener al menos 6 caracteres"})
    .required({"empty_password": "Debe ingresar su contraseña"}),
    
    passwordConfirm: string()
    .required({"empty_pass_confirm": "Debe confirmar la contraseña"})
    .oneOf([ref("password"), null], {"password_match": "Las contraseñas no coinciden"})
})