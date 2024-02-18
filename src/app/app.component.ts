import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {Observable, Subject} from "rxjs";
import {WebcamImage, WebcamModule} from "ngx-webcam";
import {NgIf} from "@angular/common";
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WebcamModule, HeaderComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
