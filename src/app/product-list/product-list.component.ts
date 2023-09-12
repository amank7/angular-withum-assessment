import { Component, OnInit } from '@angular/core';
import { DataRetrieverService } from '../services/data-retriever.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products = [];
  // available = 'pi pi-check-circle';

  constructor(private dataService: DataRetrieverService) {}

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((data) => {
      console.log(data);
    });
    this.dataService.getPublishers().subscribe((data) => console.log(data));
    this.dataService.getdataTogether().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }
}
