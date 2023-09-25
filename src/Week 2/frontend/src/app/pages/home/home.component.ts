import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule],
  template: ` <p>this is the dashboard for the app</p> `,
  styles: [],
})
export class HomeComponent {}
