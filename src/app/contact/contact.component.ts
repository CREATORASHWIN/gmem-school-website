import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  email = 'gmes2010@yahoo.in';

  addresses: {
    type: string;
    address: string;
    mapUrl: SafeResourceUrl;
  }[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.addresses = [

      // ================= OFFICE =================
      {
        type: 'Office',
        address:
          'X-41A, Old RP Nagar, 60 Feet Road, M L Camp, Mumbai - 400019',

        mapUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.google.com/maps?q=X-41A%2C%20Old%20RP%20Nagar%2C%2060%20Feet%20Road%2C%20M%20L%20Camp%2C%20Mumbai%20-%20400019&output=embed'
        ),
      },


      // ================= HIGH SCHOOL & JUNIOR COLLEGE =================
      {
        type: 'High School & Junior College',

        address:
          'Jasmine Mill Rd, Kamla Nagar, Next to St. Sebastian Church, Mahim-East, Mumbai - 400017',

        mapUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.google.com/maps?q=Jasmine%20Mill%20Rd%2C%20Kamla%20Nagar%2C%20Next%20to%20St.%20Sebastian%20Church%2C%20Mahim-East%2C%20Mumbai%20-%20400017&output=embed'
        ),
      },


      // ================= PRIMARY SCHOOL =================
      {
        type: 'Primary School',

        address:
          'Takandas Kataria Marg, Andhra Valley Road, Opp. MSEB Building, Matunga Labour Camp, Mumbai - 400019',

        mapUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.google.com/maps?q=Takandas%20Kataria%20Marg%2C%20Andhra%20Valley%20Road%2C%20Opp.%20MSEB%20Building%2C%20Matunga%20Labour%20Camp%2C%20Mumbai%20-%20400019&output=embed'
        ),
      },

    ];
  }
}