export class Airport {
  constructor({ id = null, title = null, iata = null, icao = null, combined_title = null } = {}) {
    this.id = id
    this.title = title
    this.iata = iata
    this.icao = icao
    this.combined_title = combined_title
  }
}
