export class Message {

    constructor(
        private user: string,
        private text: string
    ){}

    toString(){
        return this.user + " " + this.text;
    }
}
