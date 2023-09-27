import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-admin",
  standalone: true,
  imports: [CommonModule],
  template: ` <p>The Super Secret Admin Page!</p> `,
  styles: [],
})
export class AdminComponent {}
