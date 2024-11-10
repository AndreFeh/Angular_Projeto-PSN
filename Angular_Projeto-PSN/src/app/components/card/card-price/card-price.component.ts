import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrl: './card-price.component.css'
})
export class CardPriceComponent implements OnInit{
	@Input()
	gameName:string="";
	@Input()
	gameTitle:string="";
	@Input()
	gamePrice:number|string=0 /*|| "Grátis"*/;

	ngOnInit(): void {}
	constructor(){}

}
