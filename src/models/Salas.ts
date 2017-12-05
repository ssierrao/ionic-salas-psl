export interface Sala{
  nombre ?: string,
  asientos?: number,
  imagen?: string,
  limpieza?: string,
  ocupada?: boolean,
  ubicacion?: number
}

export interface Salas{
  [boundProperty: string]: Sala
}
