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

  addresses: { type: string; address: string; mapUrl: SafeResourceUrl }[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.addresses = [
      {
        type: 'Office',
        address: 'X-41A, Old RP Nagar, 60 Feet Road, M L Camp, Mumbai - 400019',
        mapUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3771.5332500931154!2d72.8497369!3d19.0402783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sX-41A%2C%20Old%20RP%20Nagar%2C%2060%20Feet%20Road%2C%20M%20L%20Camp%2C%20Mumbai%20-%20400019!5e0!3m2!1sen!2sae!4v1765445138896!5m2!1sen!2sae'
        )
      },
      {
        type: 'High School',
        address: 'Gandhi Memorial English High School, Street, City, State',
        mapUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6077750593695!2d72.853008!3d19.0369975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d54a3ede15%3A0xd3150a218f4b7367!2sGandhi%20Memorial%20English%20High%20School!5e0!3m2!1sen!2sae!4v1765444886984!5m2!1sen!2sae'
        )
      },
      {
        type: 'Primary School',
        address: 'Gandhi Memorial Primary School, Street, City, State',
        mapUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5332500931154!2d72.8497369!3d19.0402783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9285366f2d7%3A0xcc2b6e5f6f0231d3!2sGandhi%20Memorial%20English%20High%20School%20And%20Junior%20College!5e0!3m2!1sen!2sae!4v1765445070664!5m2!1sen!2sae'
        )
      }
    ];
  }
}