import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StaffMember {
  name: string;
  qualification: string;
  post: string;
}

@Component({
  selector: 'app-our-staff',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-staff.component.html',
  styleUrl: './our-staff.component.css'
})
export class OurStaffComponent {

  /* =====================================================
     TEACHING STAFF
  ===================================================== */

  teachingStaff: StaffMember[] = [

    {
      name: 'Mr. Khairnar Bhagwat',
      qualification: 'M.A. B.Ed',
      post: 'Head Master'
    },

    {
      name: 'Mr. Balasubramani Mudaliar',
      qualification: 'B.Sc. B.Ed.',
      post: 'Supervisor'
    },

    {
      name: 'Mrs. Aparna Dethe',
      qualification: 'B.A. B.Ed',
      post: 'Asst. Teacher'
    },

    {
      name: 'Mrs. Kiran Awasti',
      qualification: 'M.A. B.Ed',
      post: 'Asst. Teacher'
    },

    {
      name: 'Mr. John Lazar Nadar',
      qualification: 'M.A. B.Ed',
      post: 'Asst. Teacher'
    },

    {
      name: 'Mr. Sureshchandra Pandey',
      qualification: 'B.Sc. B.Ed.',
      post: 'Asst. Teacher'
    },

    {
      name: 'Mrs. Uma Mageswari',
      qualification: 'M.A. B.Ed',
      post: 'Asst. Teacher'
    },

    {
      name: 'Mrs. Helen Selvi',
      qualification: 'B.Sc. B.Ed.',
      post: 'Asst. Teacher'
    },

    {
      name: 'Mr. Sunil Ubale',
      qualification: 'B.Com. B.Ed.',
      post: 'Asst. Teacher'
    },

    {
      name: 'Mr. Sushil Kumar Pandey',
      qualification: 'S.S.C. A.T.D. A.M',
      post: 'Spl. Teacher'
    },

    {
      name: 'Mr. Janardhan Kurme',
      qualification: 'M.A. B.Ed',
      post: 'Asst. Teacher'
    },

    {
      name: 'Mrs. Jeyaiswari Nadar',
      qualification: 'B.Com. B.P.Ed',
      post: 'Spl. Teacher'
    },

    {
      name: 'Mrs. Saraswati Yadav',
      qualification: 'B.Com',
      post: 'Asst. Teacher'
    },

    {
      name: 'Ms. Susheela yadav',
      qualification: 'B.A. B.Ed',
      post: 'Asst. Teacher'
    },

    {
      name: 'Mrs. Asawari Satpute',
      qualification: 'B.Sc. B.Ed.',
      post: 'Asst. Teacher'
    },

    {
      name: 'Mrs. Naglatha Subhash',
      qualification: 'M.A. B.Ed',
      post: 'Asst. Teacher'
    },

    {
      name: 'Mrs. Kanagavalli',
      qualification: 'M.Com. B.Ed',
      post: 'Asst. Teacher'
    },

    {
      name: 'Mrs. Sangeetha Nadar',
      qualification: 'M.Com. B.Ed',
      post: 'Asst. Teacher'
    },

    {
      name: 'Mr. Ganesh Singh',
      qualification: 'M.A. B.Ed',
      post: 'Asst. Teacher'
    },

    {
      name: 'Ms. Asma Hamed Shaikh',
      qualification: 'B.Sc',
      post: 'Asst. Teacher'
    },

    {
      name: 'Mrs. Jaya Balakrishnan',
      qualification: 'M.A. B.Ed',
      post: 'Asst. Teacher'
    },

    {
      name: 'Mrs. Sandhya Mishra',
      qualification: 'B.Sc. B.Ed.',
      post: 'Asst. Teacher'
    },

    {
      name: 'Mrs. Asmita Sawant',
      qualification: 'B.A. B.Ed',
      post: 'Asst. Teacher'
    },

    {
      name: 'Mrs. Irene Ravindra',
      qualification: 'B.Com. B.Ed',
      post: 'Asst. Teacher'
    },

    {
      name: 'Ms. Kahekasha Khan',
      qualification: 'B.A. B.Ed',
      post: 'Asst. Teacher'
    },

    {
      name: 'Mrs. Sarojini Suresh Kumar',
      qualification: 'B.Sc. B.Ed.',
      post: 'Asst. Teacher'
    },

    {
      name: 'Ms. Daise Rani Ganaraj',
      qualification: 'M.A. B.Ed',
      post: 'Asst. Teacher'
    }

  ];


  /* =====================================================
     NON-TEACHING STAFF
  ===================================================== */

  nonTeachingStaff: StaffMember[] = [

    {
      name: 'Mrs. Tamilrasi Vanmathy',
      qualification: 'H.S.C. (Comp)',
      post: 'Office Supp.'
    },

    {
      name: 'Mrs. Priyanka',
      qualification: 'M.Com',
      post: 'Clerk'
    },

    {
      name: 'Ms. Jyoti Ingale',
      qualification: 'B.A',
      post: 'Clerk'
    },

    {
      name: 'Mr. Indrajeet Kasbe',
      qualification: 'X',
      post: 'Peon'
    },

    {
      name: 'Mr. Anthony Vargese',
      qualification: '',
      post: 'Peon'
    },

    {
      name: 'Mrs. Indirani',
      qualification: '',
      post: 'Sweeper'
    },

    {
      name: 'Mrs. Mumtaj',
      qualification: 'VII',
      post: 'Sweeper'
    },

    {
      name: 'Mrs. Minnal',
      qualification: '',
      post: 'Sweeper'
    },

    {
      name: 'Mrs. Sherbanu',
      qualification: 'VIII',
      post: 'Sweeper'
    }

  ];


  /* =====================================================
     GET STAFF INITIALS
  ===================================================== */

  getInitials(name: string): string {

    if (!name || !name.trim()) {
      return 'ST';
    }

    const cleanName = name
      .replace(/^(Mr\.|Mrs\.|Ms\.)\s*/i, '')
      .trim();

    const parts = cleanName
      .split(/\s+/)
      .filter(Boolean);

    if (parts.length === 0) {
      return 'ST';
    }

    if (parts.length === 1) {
      return parts[0]
        .substring(0, 2)
        .toUpperCase();
    }

    return (
      parts[0].charAt(0) +
      parts[parts.length - 1].charAt(0)
    ).toUpperCase();
  }


  /* =====================================================
     SENIOR POST
  ===================================================== */

  isSeniorPost(post: string): boolean {

    if (!post) {
      return false;
    }

    const seniorPosts = [
      'Head Master',
      'Supervisor'
    ];

    return seniorPosts.includes(post);
  }

}