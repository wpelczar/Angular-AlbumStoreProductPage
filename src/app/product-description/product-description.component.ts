import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Album } from '../album';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo: Album;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this._route.snapshot.params['id'];

    this._productService.getAlbum(id)
        .subscribe(response => this.albumInfo = response);
  }
}
