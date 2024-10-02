import { z } from 'zod'

const alumnoSchema = z.object(

    {
        "nonbre": z.string({
            invalid_type_error: "este nombre tiene que ser valido cambialo si no es valido o que ya existe",
            required_error: "llena los campos capo"
        }),
        "apellido": z.string({
            invalid_type_error: "este apellido tiene que ser valido cambialo si no es valido o que ya existe",
            required_error: "llena los campos capo"
        }),
        "dni": z.number(),
        "stage": z.number(),
        "nacimiento": z.date(),
        "genero": z.enum(["m", "f"],{
            invalid_type_error: "ponga un genero  tiene que ser valido cambialo si no es valido o que ya existe",
            required_error: "llena los campos capo"
        })
    }

)

function validarAlumno(alumno){
    return alumnoSchema.safeParse(alumno)
}


module.exports = {
    validarAlumno
}