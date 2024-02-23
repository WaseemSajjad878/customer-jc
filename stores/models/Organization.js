export class Organization {
  constructor({ id = null, parent_id = null, title = null, users = [], sub_ids = [], _sub_data = [] } = {}) {
    this.id = id
    this.parent_id = parent_id
    this.title = title
    this._sub_data = _sub_data
    this.sub_ids = sub_ids
    this.users = users
  }
}
