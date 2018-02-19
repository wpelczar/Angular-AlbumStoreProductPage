import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  albumInfo: Album;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    const id: number = +this._route.snapshot.params['id'];

    this._productService.getAlbum(id).subscribe(response => this.albumInfo = response);
  }

}
