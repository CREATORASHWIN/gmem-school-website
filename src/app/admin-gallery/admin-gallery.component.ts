import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp
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
  selector: 'app-admin-gallery',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './admin-gallery.component.html',
  styleUrl: './admin-gallery.component.css'
})
export class AdminGalleryComponent {

  // ==========================================
  // CLOUDINARY SETTINGS
  // ==========================================

  private readonly cloudinaryCloudName = 'tal3mhca';

  private readonly cloudinaryUploadPreset =
    'gmem_school_uploads';


  // ==========================================
  // GALLERY DATA
  // ==========================================

  galleryItems: GalleryItem[] = [];

  loading = false;

  saving = false;

  errorMessage = '';

  successMessage = '';

  editingId: string | null = null;


  // ==========================================
  // IMAGE DATA
  // ==========================================

  selectedFile: File | null = null;

  imagePreview = '';


  // ==========================================
  // FORM
  // ==========================================

  form: GalleryItem = {
    title: '',
    caption: '',
    imageUrl: '',
    published: true
  };


  // ==========================================
  // INITIALIZE
  // ==========================================

  async ngOnInit(): Promise<void> {

    await this.loadGallery();

  }


  // ==========================================
  // LOAD GALLERY
  // ==========================================

  async loadGallery(): Promise<void> {

    this.loading = true;

    this.errorMessage = '';

    try {

      const galleryCollection =
        collection(db, 'gallery');

      const snapshot =
        await getDocs(galleryCollection);


      this.galleryItems =
        snapshot.docs.map(docSnapshot => {

          const data =
            docSnapshot.data();

          return {

            id: docSnapshot.id,

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

        });


      // Newest photos first
      this.galleryItems.sort((a, b) => {

        const aTime =
          a.createdAt?.toMillis?.() || 0;

        const bTime =
          b.createdAt?.toMillis?.() || 0;

        return bTime - aTime;

      });

    } catch (error) {

      console.error(
        'Error loading gallery:',
        error
      );

      this.errorMessage =
        'Unable to load gallery. Please check Firebase.';

    } finally {

      this.loading = false;

    }

  }


  // ==========================================
  // SELECT IMAGE
  // ==========================================

  onImageSelected(event: Event): void {

    const input =
      event.target as HTMLInputElement;


    if (
      !input.files ||
      input.files.length === 0
    ) {

      return;

    }


    const file =
      input.files[0];


    // Check image type
    if (!file.type.startsWith('image/')) {

      this.errorMessage =
        'Please select a valid image file.';

      this.selectedFile = null;

      this.imagePreview = '';

      return;

    }


    // Maximum 10 MB
    const maxSize =
      10 * 1024 * 1024;


    if (file.size > maxSize) {

      this.errorMessage =
        'Image size must be less than 10 MB.';

      this.selectedFile = null;

      this.imagePreview = '';

      return;

    }


    this.selectedFile = file;

    this.errorMessage = '';

    this.successMessage = '';


    // Create local preview
    const reader =
      new FileReader();


    reader.onload = () => {

      this.imagePreview =
        reader.result as string;

    };


    reader.readAsDataURL(file);

  }


  // ==========================================
  // UPLOAD IMAGE TO CLOUDINARY
  // ==========================================

  private async uploadToCloudinary(
    file: File
  ): Promise<string> {

    const uploadUrl =
      `https://api.cloudinary.com/v1_1/${this.cloudinaryCloudName}/image/upload`;


    const formData =
      new FormData();


    formData.append(
      'file',
      file
    );


    formData.append(
      'upload_preset',
      this.cloudinaryUploadPreset
    );


    formData.append(
      'folder',
      'gmem-school'
    );


    const response =
      await fetch(
        uploadUrl,
        {
          method: 'POST',
          body: formData
        }
      );


    if (!response.ok) {

      const errorText =
        await response.text();

      console.error(
        'Cloudinary upload error:',
        errorText
      );

      throw new Error(
        'Cloudinary upload failed.'
      );

    }


    const result =
      await response.json();


    if (!result.secure_url) {

      throw new Error(
        'Cloudinary did not return an image URL.'
      );

    }


    return result.secure_url;

  }


  // ==========================================
  // ADD GALLERY
  // ==========================================

  async addGallery(): Promise<void> {

    // Validate title
    if (!this.form.title.trim()) {

      this.errorMessage =
        'Please enter a gallery title.';

      return;

    }


    // Validate caption
    if (!this.form.caption.trim()) {

      this.errorMessage =
        'Please enter a gallery caption.';

      return;

    }


    // New photo requires selected file
    if (!this.selectedFile) {

      this.errorMessage =
        'Please browse and select an image.';

      return;

    }


    this.saving = true;

    this.errorMessage = '';

    this.successMessage = '';


    try {

      // ========================================
      // UPLOAD TO CLOUDINARY
      // ========================================

      this.successMessage =
        'Uploading image to Cloudinary...';


      const imageUrl =
        await this.uploadToCloudinary(
          this.selectedFile
        );


      console.log(
        'Cloudinary image URL:',
        imageUrl
      );


      // ========================================
      // SAVE TO FIRESTORE
      // ========================================

      this.successMessage =
        'Saving gallery information...';


      await addDoc(
        collection(db, 'gallery'),
        {

          title:
            this.form.title.trim(),

          caption:
            this.form.caption.trim(),

          imageUrl:
            imageUrl,

          published:
            this.form.published,

          createdAt:
            serverTimestamp()

        }
      );


      // ========================================
      // SUCCESS
      // ========================================

      this.successMessage =
        'Gallery photo uploaded successfully!';


      this.resetForm();

      await this.loadGallery();

    } catch (error) {

      console.error(
        'Error adding gallery:',
        error
      );


      this.errorMessage =
        'Unable to upload gallery photo. Please try again.';

    } finally {

      this.saving = false;

    }

  }


  // ==========================================
  // EDIT GALLERY
  // ==========================================

  editGallery(
    item: GalleryItem
  ): void {

    this.editingId =
      item.id || null;


    this.form = {

      title:
        item.title,

      caption:
        item.caption,

      imageUrl:
        item.imageUrl,

      published:
        item.published

    };


    this.selectedFile = null;

    this.imagePreview = '';

    this.successMessage = '';

    this.errorMessage = '';


    window.scrollTo({

      top: 0,

      behavior: 'smooth'

    });

  }


  // ==========================================
  // UPDATE GALLERY
  // ==========================================

  async updateGallery(): Promise<void> {

    if (!this.editingId) {

      return;

    }


    // Validate title
    if (!this.form.title.trim()) {

      this.errorMessage =
        'Please enter a gallery title.';

      return;

    }


    // Validate caption
    if (!this.form.caption.trim()) {

      this.errorMessage =
        'Please enter a gallery caption.';

      return;

    }


    this.saving = true;

    this.errorMessage = '';

    this.successMessage = '';


    try {

      let imageUrl =
        this.form.imageUrl;


      // ========================================
      // IF NEW IMAGE SELECTED
      // UPLOAD TO CLOUDINARY
      // ========================================

      if (this.selectedFile) {

        this.successMessage =
          'Uploading new image to Cloudinary...';


        imageUrl =
          await this.uploadToCloudinary(
            this.selectedFile
          );

      }


      // ========================================
      // UPDATE FIRESTORE
      // ========================================

      this.successMessage =
        'Updating gallery information...';


      await updateDoc(

        doc(
          db,
          'gallery',
          this.editingId
        ),

        {

          title:
            this.form.title.trim(),

          caption:
            this.form.caption.trim(),

          imageUrl:
            imageUrl,

          published:
            this.form.published

        }

      );


      this.successMessage =
        'Gallery photo updated successfully!';


      this.resetForm();

      await this.loadGallery();

    } catch (error) {

      console.error(
        'Error updating gallery:',
        error
      );


      this.errorMessage =
        'Unable to update gallery photo. Please try again.';

    } finally {

      this.saving = false;

    }

  }


  // ==========================================
  // DELETE GALLERY
  // ==========================================

  async deleteGallery(
    item: GalleryItem
  ): Promise<void> {

    if (!item.id) {

      return;

    }


    const confirmed =
      confirm(
        `Are you sure you want to delete "${item.title}"?`
      );


    if (!confirmed) {

      return;

    }


    this.errorMessage = '';

    this.successMessage = '';


    try {

      await deleteDoc(

        doc(
          db,
          'gallery',
          item.id
        )

      );


      this.successMessage =
        'Gallery photo deleted successfully.';


      await this.loadGallery();

    } catch (error) {

      console.error(
        'Error deleting gallery:',
        error
      );


      this.errorMessage =
        'Unable to delete gallery photo.';

    }

  }


  // ==========================================
  // PUBLISH / HIDE
  // ==========================================

  async togglePublished(
    item: GalleryItem
  ): Promise<void> {

    if (!item.id) {

      return;

    }


    try {

      const newStatus =
        !item.published;


      await updateDoc(

        doc(
          db,
          'gallery',
          item.id
        ),

        {
          published:
            newStatus
        }

      );


      item.published =
        newStatus;


      this.successMessage =
        newStatus
          ? 'Gallery photo published successfully.'
          : 'Gallery photo unpublished successfully.';

    } catch (error) {

      console.error(
        'Error changing gallery status:',
        error
      );


      this.errorMessage =
        'Unable to change publish status.';

    }

  }


  // ==========================================
  // CANCEL EDIT
  // ==========================================

  cancelEdit(): void {

    this.resetForm();

  }


  // ==========================================
  // RESET FORM
  // ==========================================

  resetForm(): void {

    this.editingId =
      null;


    this.form = {

      title: '',

      caption: '',

      imageUrl: '',

      published: true

    };


    this.selectedFile =
      null;


    this.imagePreview =
      '';

  }

}