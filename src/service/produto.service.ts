import { Injectable } from "@angular/core";
import { Produto } from "src/models/produto";
import { lista } from "./lista";

@Injectable({
    providedIn: 'root'
})

export class ProdutoService {
    produtos: Produto[];

    constructor(){
        this.produtos = lista;
    }

    public getAll(){
        return this.produtos;
    }
}

