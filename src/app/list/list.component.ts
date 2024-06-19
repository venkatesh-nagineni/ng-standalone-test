import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListItemComponent } from "../list-item/list-item.component";

@Component({
  selector: "app-list",
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent {
  @Input() fromListItem: boolean = false;
}
