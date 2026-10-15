CONSIGNA
/*
let usuarios = [
    {
        id: 1,
        email: "pepe@gmail.com",
        nombre: 'pepe'
    },
    {
        id: 2,
        email: "jose@gmail.com",
        nombre: 'jose'
    },
    {
        id: 3,
        email: "adrian@gmail.com",
        nombre: 'adrian'
    },
    {
        id: 4,
        email: "julieta@gmail.com",
        nombre: 'julieta'
    }
] 
/*
Crear las funciones: 
- buscarUsuarioPorId(id_usuario)*/
/*
buscarUsuarioPorId(id_usuario) {
    for (let usuario of usuarios) {
        if (usuario.id === id_usuario) {
            return usuario
        }
    }

    return null
}

let usuario_encontrado = buscarUsuarioPorId(2)
console.log(usuario_encontrado)
/*
- buscarUsuarioPorEmail(email)*/
/*
function buscarUsuarioPorEmail(email) {
    for (let usuario of usuarios) {
        if (usuario.email === email) {
            return usuario
        }
    }

    return null
}

let usuario_encontrado = buscarUsuarioPorEmail("adrian@gmail.com")
console.log(usuario_encontrado)


/*
- buscarUsuarioPorNombre(nombre) */
/*
function buscarUsuarioPorNombre(nombre) {
    for (let usuario of usuarios) {
        if (usuario.nombre === nombre) {
            return usuario
        }
    }

    return null
}

let usuario_encontrado = buscarUsuarioPorNombre("julieta")
console.log(usuario_encontrado)

/*
- eliminarUsuarioPorId(id_usuario) (Dificil)
  */
/*
function eliminarUsuarioPorId(id_usuario) {
    for (let indice = 0; indice < usuarios.length; indice = indice + 1) {
        let usuario = usuarios[indice]

        if (usuario.id === id_usuario) {
            usuarios.splice(indice, 1)
            return
        }
    }
}

eliminarUsuarioPorId(1)
console.log(usuarios) */