import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["input-field"];
  connect() {
    // this.element.textContent = "Hello World!";
  }

  toggleInput() {
    console.log(this["input-fieldTarget"]);
    this["input-fieldTarget"].hidden = !this["input-fieldTarget"].hidden;
  }
}
