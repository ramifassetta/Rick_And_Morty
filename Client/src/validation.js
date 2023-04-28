export const validation = ( userData ) => {
    const errors = {}

    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userData.email)){
        errors.email = "el email ingresado no es valido";
    }
    if(!userData.email){ //userData.email.length = ""
        errors.email = "debe ingresar un email";
    }
    if(userData.email.length > 35){
        errors.email = "el email no debe superar los 35 caracteres"
    }


    if (!/\d+/.test(userData.password)){
        errors.password =  "Por favor ingrese una contraseña valida, que contenga al menos un numero"
    }
    else if(userData.password.length > 10 || userData.password.length < 6){
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
    }
    else{
        errors.password = ""
    }
    
    return errors;
}

 

// // if(errors.password.lenght < 6){
// //   setErrors({
// //     ...errors,
// //     password: "tiene que tener un minimo de 6 caracteres"
// //   })
// // }
// // else setErrors({...errors, password: ""});

