import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SscScorer {
  year: string;
  name: string;
  percentage: number;
  schoolPassing: number;
}

interface HscScorer {
  year: string;
  name: string;
  percentage: number;
  collegePassing: number;
}

@Component({
  selector: 'app-academic-excellence',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './academic-excellence.component.html',
  styleUrl: './academic-excellence.component.css'
})
export class AcademicExcellenceComponent {

  /* ================================
     SSC TOP SCORERS
  ================================= */

  sscScorers: SscScorer[] = [

    { year: '1997-1998', name: 'KHAN AKBAR ALI', percentage: 73.00, schoolPassing: 100 },
    { year: '1998-1999', name: 'NADAR SAHAYA PREMA', percentage: 66.00, schoolPassing: 72 },
    { year: '1999-2000', name: 'UMIMUL SABIRAL', percentage: 73.43, schoolPassing: 85 },
    { year: '2000-2001', name: 'SAYED IBRAHIM ISMAIL', percentage: 81.00, schoolPassing: 96 },
    { year: '2001-2002', name: 'MARY MADASWAMY', percentage: 75.00, schoolPassing: 96 },
    { year: '2001-2002', name: 'SHAIKH IBRAHIM AHMED ALI', percentage: 75.00, schoolPassing: 96 },
    { year: '2002-2003', name: 'ROSHAN FAKRUDDIN SHAIKH', percentage: 86.00, schoolPassing: 100 },
    { year: '2003-2004', name: 'SHAIKH MOHD. JAVED SABIR', percentage: 79.46, schoolPassing: 96 },
    { year: '2004-2005', name: 'KHAN SAMSUNNISHA SHERUDDIN', percentage: 82.00, schoolPassing: 100 },
    { year: '2005-2006', name: 'JAIN DARSHANA ROSHAN', percentage: 82.00, schoolPassing: 100 },
    { year: '2006-2007', name: 'VIKANI JAYDEE SURESH', percentage: 86.46, schoolPassing: 98.14 },
    { year: '2007-2008', name: 'GOSWAMI RAHUL', percentage: 86.46, schoolPassing: 98.14 },
    { year: '2008-2009', name: 'NADAR RAGBJAWANYA', percentage: 94.00, schoolPassing: 100 },
    { year: '2009-2010', name: 'RAKESH KUMAR', percentage: 92.43, schoolPassing: 100 },
    { year: '2010-2011', name: 'SHAIKH SAJIYA', percentage: 94.00, schoolPassing: 100 },
    { year: '2011-2012', name: 'LALIN RAJA', percentage: 89.82, schoolPassing: 100 },
    { year: '2012-2013', name: 'SAYED ARBAZ ALI', percentage: 89.68, schoolPassing: 100 },
    { year: '2013-2014', name: 'KHAN SANA BARKATULLAH', percentage: 90.80, schoolPassing: 100 },
    { year: '2014-2015', name: 'SAYED SHABINA', percentage: 91.40, schoolPassing: 100 },
    { year: '2015-2016', name: 'CHETTIYAR SUDHA', percentage: 93.00, schoolPassing: 100 },
    { year: '2016-2017', name: 'SURVAIYA NEHAL RAMESH', percentage: 94.80, schoolPassing: 100 },
    { year: '2017-2018', name: 'MUTHU SNEHA', percentage: 91.00, schoolPassing: 100 },
    { year: '2018-2019', name: 'MANOJ GURU CHANDRAN', percentage: 88.40, schoolPassing: 100 },
    { year: '2019-2020', name: 'SNEHA PREMJI CHAUHAN', percentage: 95.20, schoolPassing: 100 },
    { year: '2020-2021', name: 'NADAR NIRMALA RAJAGOPA', percentage: 95.00, schoolPassing: 100 },

    // Latest SSC records
    { year: '2021-2022', name: 'SHAIKH SUFIYA', percentage: 94.80, schoolPassing: 100 },
    { year: '2022-2023', name: 'NADAR SUJITA', percentage: 93.20, schoolPassing: 100 },
    { year: '2023-2024', name: 'DULGACH SHAGUN RAJENDRA SINGH', percentage: 95.80, schoolPassing: 100 },
    { year: '2024-2025', name: 'SHOAIB AHMED GULAM DASTAGIR', percentage: 95.60, schoolPassing: 100 },
    { year: '2025-2026', name: 'MUTHU ANUSHA ARUMUGAM', percentage: 92.60, schoolPassing: 100 }
  ];


  /* ================================
     HSC TOP SCORERS
  ================================= */

  hscScorers: HscScorer[] = [

    { year: '2018-19', name: 'SHAIKH RUBINA KHAJA MOHIDDIN', percentage: 81.69, collegePassing: 100 },
    { year: '2019-20', name: 'KHAN IQRA HASHIM', percentage: 86.31, collegePassing: 100 },
    { year: '2020-21', name: 'GUPTA ADITYA', percentage: 93.00, collegePassing: 100 },
    { year: '2021-22', name: 'SAYYED ALMAS', percentage: 88.33, collegePassing: 100 },
    { year: '2022-23', name: 'ABDUL AZIZ SAYYED', percentage: 79.00, collegePassing: 100 },
    { year: '2023-24', name: 'NADAR KASHINI', percentage: 77.83, collegePassing: 100 },
    { year: '2024-25', name: 'USMA IMRAN KUMBHAR', percentage: 73.50, collegePassing: 100 },
    { year: '2025-26', name: 'ANJUM SHAIKH', percentage: 76.50, collegePassing: 100 }
  ];


  /* ================================
     SSC HIGHEST
  ================================= */

  get highestSscPercentage(): number {
    return Math.max(
      ...this.sscScorers.map(student => student.percentage)
    );
  }


  get highestSscScorer(): SscScorer {
    return this.sscScorers.reduce(
      (highest, student) =>
        student.percentage > highest.percentage
          ? student
          : highest
    );
  }


  isHighestSsc(student: SscScorer): boolean {
    return student.percentage === this.highestSscPercentage;
  }


  /* ================================
     HSC HIGHEST
  ================================= */

  get highestHscPercentage(): number {
    return Math.max(
      ...this.hscScorers.map(student => student.percentage)
    );
  }


  get highestHscScorer(): HscScorer {
    return this.hscScorers.reduce(
      (highest, student) =>
        student.percentage > highest.percentage
          ? student
          : highest
    );
  }


  isHighestHsc(student: HscScorer): boolean {
    return student.percentage === this.highestHscPercentage;
  }

}