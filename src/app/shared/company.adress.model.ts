export class CompanyAdress {
    constructor(
        public street: string,
        public streetNumber: number,
        public streetAddition: string,
        public postalcode: number,
        public town: string,
        public country: string
    ) {}
}
