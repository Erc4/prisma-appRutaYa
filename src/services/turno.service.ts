import { prisma } from "../lib/prisma";

    
export const turnoService = {
    prueba :(horaInicio: EpochTimeStamp, horaFinal:EpochTimeStamp) : void =>{
        console.log(horaInicio, horaFinal)
    }
}