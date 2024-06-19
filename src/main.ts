import { Component, importProvidersFrom } from "@angular/core";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./app/list/list.component";

@Component({
  selector: "my-app",
  standalone: true,
  imports: [CommonModule, ListComponent],
  template: ` <app-list></app-list> `,
})
export class App {}

bootstrapApplication(App, {
  providers: [importProvidersFrom(BrowserModule)],
}).catch((err) => console.error(err));
