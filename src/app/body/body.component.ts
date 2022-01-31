import { Component, EventEmitter, HostListener, Injectable, Output, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.css"]
})

@Injectable({providedIn: "root"})
export class BodyComponent {

  @Output() requestHelp = new EventEmitter<void>();

  divHomeComponentHigh: number = 0;
  discription: string[];
  opened: boolean = false;
  
  onTop(){
    window.scroll({top:0, behavior: "smooth"})
  }
  constructor(){
    this.onSize();
  }

  @HostListener("window:resize", ["$event"])
  onSize(){
    this.divHomeComponentHigh = (window.innerHeight * 91) / 100;
  }

  callForHelp(index: number){
    this.opened = true;
    if(index == 0){
      this.discription = ["11111111111111111111111", "222222222222222222222222222"];
    }
    else{
      this.discription = ["666666666666666666", "4444444444444"];
    }

    this.requestHelp.emit();
  }
  
  changeNumber(){
        
  }
}