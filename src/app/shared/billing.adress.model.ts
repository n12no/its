export class BillingAdress {
    constructor(
        public street: string,
        public streetNumber: number,
        public streetAddition: string,
        public postalcode: number,
        public town: string,
        public country: string,
        public companyName: string,
        public note: string
    ) {}
}
