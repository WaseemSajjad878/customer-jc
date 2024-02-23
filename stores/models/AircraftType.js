export class AircraftType {
  constructor({ id = null, title = null, grade = null, range = null, min_seat = null, max_seat = null } = {}) {
    this.id = id
    this.title = title
    this.grade = grade
    this.range = range
    this.min_seat = min_seat
    this.max_seat = max_seat
  }
}
