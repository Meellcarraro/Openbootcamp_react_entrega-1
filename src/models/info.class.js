export class contactInfo {
    name = '';
    surname = '';
    mail = '';
    conected = true;
    // true = conectado y false = desconectado

    constructor(name, surname, mail, conected){
        this.name = name ;
        this.surname = surname;
        this.mail = mail; 
        this.conected = conected
    }
}