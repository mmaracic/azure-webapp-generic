 
 type User = {
    uuid: string
    email?: Email
    handle: string
 }

 type Login = {
    timestamp: Date
    ipAdress: IpAdress
 }

 class IpAdress {

    ip: string

    constructor (ip: string) {
        this.ip = ip
    }
 }

 class Email {

    email: string

    constructor (email: string) {
        this.email = email
    }
 }

