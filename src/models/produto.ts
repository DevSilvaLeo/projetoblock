export class Produto {
    IdProduto: number;
    Nome: string;
    Imagem: string;
    BgImage: string;
    Descricao: string;

    constructor(id?: number, nome?: string, imagem?: string, bgimage?:string ,descricao?:string) {
        this.IdProduto = id;
        this.Nome = nome;
        this.Imagem = imagem;
        this.BgImage = bgimage;
        this.Descricao = descricao;
    }
}