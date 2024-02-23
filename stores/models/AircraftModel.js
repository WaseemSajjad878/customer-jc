export class AircraftModel {
  constructor({
    id = null,
    type_id = null,
    title = null,
    seats = null,
    cabin_height = { value: null, unit: 'meter' },
    cabin_width = { value: null, unit: 'meter' },
    cabin_length = { value: null, unit: 'meter' },
    attendant = null,
    meals = null,
    max_flight_time = { value: null, unit: 'seconds' },
    speed = { value: null, unit: 'kilometer_per_hour' },
    max_distance = { value: null, unit: 'kilometer' },
    image = null,
    description = null,
    page_url = null,
    payload = { value: null, unit: 'ton' },
    aircraft_type = { id: null, title: null },
  } = {}) {
    this.id = id
    this.type_id = type_id
    this.title = title
    this.seats = seats
    this.cabin_height = cabin_height
    this.cabin_width = cabin_width
    this.cabin_length = cabin_length
    this.attendant = attendant
    this.meals = meals
    this.max_flight_time = max_flight_time
    this.speed = speed
    this.max_distance = max_distance
    this.image = image
    this.description = description
    this.page_url = page_url
    this.payload = payload
    this.aircraft_type = aircraft_type
  }
}
