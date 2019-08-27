import { Company } from '../shared/company.model';
import { CompanyAdress } from '../shared/company.adress.model';
import { BillingAdress } from '../shared/billing.adress.model';
import { Person } from '../shared/person.model';
import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';
@Injectable()
export class CompanyService {
    // companyAdress: CompanyAdress = new CompanyAdress('Am großen Platz', 3, '', 44787, 'Bochum', 'Germany');
    // billingAdress: BillingAdress = new BillingAdress('Auf der Mauer', 45, '', 80331, 'München', 'Germany',
    //     'Abrechnungsfirma GmbH', 'Dies ist eine Note');
    // contactPerson: Person = new Person('Reiner', 'Müller', 'r.m@gmail.com', '0234/844564', '0163/3256489');
    company: Company;
        constructor(public auth: AuthenticationService) {
            this.company =
            new Company(
                'Horst-Görtz Institut',
                new CompanyAdress('Am großen Platz', 3, '', 44787, 'Bochum', 'Germany'),
                new BillingAdress('Auf der Mauer', 45, '', 44789, 'Bochum', 'Germany', 'RUB Bochum', 'Ich bin eine note'),
                new Person('Reiner', 'Müller', 'r.m@gmail.com', '0234/844564', '0163/3256489'),
                'www.google.de',
                'logoPath',
                ''
            );
            if (auth.userDetails()) {
                this.company.contact.mail = auth.userDetails().email;
                this.company.uid = auth.userDetails().uid;
            }

        }
    getCompany() {
        console.log(this.company);
        return this.company;
    }
    getContact() {
        return this.company.contact;
    }
    getCompanyAdress() {
        return this.company.companyAdress;
    }
    getBillingAdress() {
        return this.company.billingAdress;
    }
    editCompany(company: { companyName: string; companyHomepage: string; fileInput: string; }) {
        this.company.name = company.companyName;
        this.company.url = company.companyHomepage;
        this.company.logo = company.fileInput;
    }
    editCompanyAdress(companyAdress: CompanyAdress) {
        this.company.companyAdress.street = companyAdress.street;
        this.company.companyAdress.streetNumber = companyAdress.streetNumber;
        this.company.companyAdress.streetAddition = companyAdress.streetAddition;
        this.company.companyAdress.postalcode = companyAdress.postalcode;
        this.company.companyAdress.town = companyAdress.town;
        this.company.companyAdress.country = companyAdress.country;
    }
    editBillingAdress(billingAdress: BillingAdress) {
        this.company.billingAdress.companyName = billingAdress.companyName;
        this.company.billingAdress.street = billingAdress.street;
        this.company.billingAdress.streetNumber = billingAdress.streetNumber;
        this.company.billingAdress.streetAddition = billingAdress.streetAddition;
        this.company.billingAdress.postalcode = billingAdress.postalcode;
        this.company.billingAdress.town = billingAdress.town;
        this.company.billingAdress.country = billingAdress.country;
        this.company.billingAdress.note = billingAdress.note;
    }
    editContact(contact: Person) {
        console.log(this.company);
        this.company.contact.prename = contact.prename;
        this.company.contact.name = contact.name;
        this.company.contact.phonenumber = contact.phonenumber;
        this.company.contact.mobilenumber = contact.mobilenumber;
        this.company.contact.mail = contact.mail;
    }

}
