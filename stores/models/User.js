export class User {
  constructor({
    id = null,
    firstname = null,
    lastname = null,
    selected_organization = null,
    available_organizations = [],
  } = {}) {
    this.id = id
    this.firstname = firstname
    this.lastname = lastname
    this.selected_organization = selected_organization
    this.available_organizations = available_organizations
  }
}
