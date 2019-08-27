import { CompanyAdress } from './company.adress.model';
import { BillingAdress } from './billing.adress.model';
import { Person } from './person.model';
export class Company {
    constructor(
        public name: string,
        public companyAdress: CompanyAdress,
        public billingAdress: BillingAdress,
        public contact: Person,
        public url: string,
        public logo: string,
        public uid: string
    ) {}
}
