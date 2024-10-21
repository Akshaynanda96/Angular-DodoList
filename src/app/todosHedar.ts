export class Todo {
    srno: number;
    title: string;
    description: string;
    activate: boolean;

    constructor(srno: number, title: string, description: string, activate: boolean) {
        this.srno = srno;
        this.title = title;
        this.description = description;
        this.activate = activate;
    }
}
