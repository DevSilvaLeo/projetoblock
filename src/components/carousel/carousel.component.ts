import { Component, OnInit } from "@angular/core";
import { Produto } from "src/models/produto";
import { ProdutoService } from "src/service/produto.service";

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html'
})

export class CarouselComponent implements OnInit {
    produtos: Produto[] = [];

    constructor(private service: ProdutoService){
        
    }

    public listarTodos(){
        this.produtos = this.service.getAll();
    }

    slideConfig = {
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "nextArrow": "<div class='nav-btn next-slide'></div>",
        "prevArrow": "<div class='nav-btn prev-slide'></div>",
        "dots": true,
        "infinite": true,
        "autoplay": true,
        "autoplaySpeed": 2000
    }
    
    slickInit(e){
    }
    breakpoint(e){
    }
    afterChange(e){
    }
    beforeChange(e){
    }

    ngOnInit() {
        this.listarTodos();
    }
    
}