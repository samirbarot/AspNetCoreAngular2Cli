import { Component } from "@angular/core";
import { HelloService } from "./hello.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  greeting: string;

  constructor(private helloService: HelloService) {}

  ngOnInit() {
    this.greet();
  }

  greet(): void {
    this.helloService
      .greet()
      .subscribe(data => this.greeting = data);
  }
}
