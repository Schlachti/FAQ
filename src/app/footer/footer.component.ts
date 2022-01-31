import { Component, Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})

@Injectable({providedIn: "root"})
export class FooterComponent {

  constructor(private routes: Router){}

  onTop(){
    window.scroll({top:0, behavior: "smooth"})
  }

}
