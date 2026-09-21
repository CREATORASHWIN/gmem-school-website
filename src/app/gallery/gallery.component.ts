import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  collection,
  getDocs
} from 'firebase/firestore';

import { db } from '../firebase.config';

interface GalleryItem {
  id?: string;
  title: string;
  caption: string;
  imageUrl: string;
  published: boolean;
  createdAt?: any;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  // ==========================================
  // GALLERY DATA
  // ==========================================

  images: GalleryItem[] = [];

  loading = true;

  errorMessage = '';


  // ==========================================
  // INITIALIZE
  // ==========================================

  async ngOnInit(): Promise<void> {

    await this.loadGallery();

  }


  // ==========================================
  // LOAD PUBLIC GALLERY
  // ==========================================

  async loadGallery(): Promise<void> {

    this.loading = true;

    this.errorMessage = '';

    try {

      const galleryCollection =
        collection(db, 'gallery');

      const snapshot =
        await getDocs(galleryCollection);


      this.images =
        snapshot.docs

          .map(docSnapshot => {

            const data =
              docSnapshot.data();

            return {

              id:
                docSnapshot.id,

              title:
                data['title'] || '',

              caption:
                data['caption'] || '',

              imageUrl:
                data['imageUrl'] || '',

              published:
                data['published'] === true,

              createdAt:
                data['createdAt'] || null

            };

          })

          // Only show published photos
          .filter(
            item => item.published === true
          );


      // Newest photos first
      this.images.sort((a, b) => {

        const aTime =
          a.createdAt?.toMillis?.() || 0;

        const bTime =
          b.createdAt?.toMillis?.() || 0;

        return bTime - aTime;

      });


    } catch (error) {

      console.error(
        'Error loading public gallery:',
        error
      );

      this.errorMessage =
        'Unable to load gallery photos.';

    } finally {

      this.loading = false;

    }

  }

}