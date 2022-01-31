import { Component, Injectable, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-help",
  templateUrl: "./help.component.html",
  styleUrls: ["./help.component.css"]
})

@Injectable({providedIn: "root"})
export class HelpComponent {
    
    constructor(private routes: Router){}

    @Input() information: string[];
    
}
