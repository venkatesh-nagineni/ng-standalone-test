import { Component, forwardRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "../list/list.component";

@Component({
  selector: "app-list-item",
  standalone: true,
  imports: [CommonModule, forwardRef(() => ListComponent)],
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.css"],
})
export class ListItemComponent {}
