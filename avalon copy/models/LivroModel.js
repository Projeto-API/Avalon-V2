export class LivroModel {
    private id: number;
    private titulo: string;
    private descricao: string;
    private imagem: string;
    private valor :string;
    private quantidade: number;

   
  
    constructor(id: number, titulo: string, descricao: string, imagem: string , valor :string , quantidade: number) {
      this.id = id;
      this.titulo = titulo;
      this.descricao = descricao;
      this.imagem = imagem;
      this.valor = valor;
      this.quantidade = quantidade;
     
    }
  
    getTitulo(): string {
      return this.titulo;
    }
  
  }