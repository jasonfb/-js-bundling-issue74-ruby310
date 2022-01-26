import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("hello controller was connected...")
    this.element.textContent = "Hello World!"
  }
}
