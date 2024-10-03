export class EmployeeClass {
  constructor(id, email, first_name, last_name, avatar) {
    this.id = id;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this.avatar = avatar;
  }

  getFullName() {
    return `${this.first_name} ${this.last_name}`;
  }
}
