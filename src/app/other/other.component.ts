import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  apiData;
  
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(id?) {
    this.ds.get(id).subscribe(response => {
      this.apiData = response;
    })
  }

}
