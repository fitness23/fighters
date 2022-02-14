import { Component, OnInit } from '@angular/core';
import { HttpService } from "./services/http.service";
import { Main } from "./interfaces/data-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private httpService: HttpService) {
  }

  mainData: Main;
  itemIndexFocus: number = 0;


  ngOnInit() {

    this.httpService.getFighterDetail()

            .subscribe((res) => {

              this.mainData = res.body;

              console.log(this.mainData);
               
            });
  }


  getImage() {
    return this.mainData.matches[this.itemIndexFocus].image;
  }
}
