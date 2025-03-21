class User {
    readonly uuid: string;
    readonly username: string;
    readonly email: string;

    constructor(uuid: string, username: string, email: string) {
        this.uuid = uuid;
        this.username = username;
        this.email = email;
    }
}