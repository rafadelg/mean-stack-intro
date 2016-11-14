export class Libro {

    //CONSTRUCTOR DECLARATIVO (de las propiedades/atributos)
    constructor ( 

        public titulo: string,
        private autor: string,
        private sinopsis?: string,      //será opcional
        //private otroCampo?: string; 
    ) {}

    toString():string {
        return ("Libro: \n\tTitulo: " + this.titulo +
                "Autor: \n\tAutor: " + this.autor +
                "Sinopsis: \nSinopsis: " + this.sinopsis);
    }


}
