    import { prisma } from "../lib/prisma";

//En los servicios se va a definir qué va a hacer.



export const choferService = { 
    prueba: (latitud: number, longitud: number): void => {
    console.log(latitud, longitud);
    },
};