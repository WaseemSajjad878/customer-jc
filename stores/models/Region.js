export class Region {
  constructor({ id = null, name = null, code = null, combined_title = null } = {}) {
    this.id = id
    this.name = name
    this.code = code
    this.combined_title = combined_title
  }
}
