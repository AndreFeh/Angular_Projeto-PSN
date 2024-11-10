import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
	@Input()
	gameCover:string="assets/nfs.jpg";

	// CARD LABEL
	@Input()
	gameDetail:string= "NAO IMPLEMENTADO";

	// CARD PRICE
	@Input()
	gameName:string="NAO IMPLEMENTADO";
	@Input()
	gameTitle:string="TIPO DE MIDIA";
	@Input()
	gamePrice:number|string=0 /*|| "Grátis"*/;

	ngOnInit(): void {	}
	constructor(){}
}
