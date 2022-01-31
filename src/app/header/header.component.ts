import { Component, Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})

@Injectable({providedIn: "root"})
export class HeaderComponent {

  constructor(private routes: Router){}

}
