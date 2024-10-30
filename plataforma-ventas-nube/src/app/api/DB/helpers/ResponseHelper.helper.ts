import { NextResponse } from "next/server";


export const statusCode =  {
    aceptado: 202,
    creado: 201,
    actualizado: 200,
    eliminado: 204,
    sinContenido: 204,
    badRequest: 400,
    noAutorizado: 401,
    prohibido: 403,
    noEncontrado: 404,
    métodoNoPermitido: 405,
    tiempoEspera: 408,
    conflictivo: 409,
    longitudRequerida: 411,
    entidadNoProcesable: 422,
    errorServidor: 500,
    noImplementado: 501,
    servicioNoDisponible: 503,
    versionHTTPNoSoportada: 505,
  };

export function response (status = 200, data: any){
    return NextResponse.json({status, data})
}

export function resError( message = "error sin descripcion"){
    throw new Error(message)
}