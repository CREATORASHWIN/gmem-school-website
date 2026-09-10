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
  query,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';

import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage';

import { db, storage } from '../firebase.config';

interface NewsItem {
  id?: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  published: boolean;
}

@Component({
  selector: 'app-admin-news',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './admin-news.component.html',
  styleUrl: './admin-news.component.css'
})
export class AdminNewsComponent {

  newsItems: NewsItem[] = [];

  loading = false;
  saving = false;

  errorMessage = '';
  successMessage = '';

  editingId: string | null = null;

  selectedFile: File | null = null;
  imagePreview = '';

  form: NewsItem = {
    title: '',
    date: '',
    description: '',
    imageUrl: '',
    published: true
  };


  // ================================
  // LOAD NEWS
  // ================================

  async ngOnInit(): Promise<void> {
    await this.loadNews();
  }


  async loadNews(): Promise<void> {

    this.loading = true;
    this.errorMessage = '';

    try {

      const newsCollection = collection(db, 'news');

      const newsQuery = query(
        newsCollection,
        orderBy('createdAt', 'desc')
      );

      const snapshot = await getDocs(newsQuery);

      this.newsItems = snapshot.docs.map(docSnapshot => {

        const data = docSnapshot.data();

        return {
          id: docSnapshot.id,
          title: data['title'] || '',
          date: data['date'] || '',
          description: data['description'] || '',
          imageUrl: data['imageUrl'] || '',
          published: data['published'] === true
        };

      });

    } catch (error) {

      console.error('Error loading news:', error);

      this.errorMessage =
        'Unable to load news. Please check Firebase.';

    } finally {

      this.loading = false;

    }

  }


  // ================================
  // SELECT IMAGE
  // ================================

  onFileSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    this.selectedFile = input.files[0];

    if (!this.selectedFile.type.startsWith('image/')) {

      this.errorMessage = 'Please select an image file.';

      this.selectedFile = null;

      return;
    }

    this.errorMessage = '';

    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };

    reader.readAsDataURL(this.selectedFile);
  }


  // ================================
  // UPLOAD IMAGE
  // ================================

  async uploadImage(): Promise<string> {

    if (!this.selectedFile) {
      return this.form.imageUrl || '';
    }

    const fileName =
      `${Date.now()}_${this.selectedFile.name}`;

    const storageReference =
      ref(storage, `news/${fileName}`);

    await uploadBytes(
      storageReference,
      this.selectedFile
    );

    return await getDownloadURL(storageReference);
  }


  // ================================
  // ADD NEWS
  // ================================

  async addNews(): Promise<void> {

    if (!this.form.title.trim()) {

      this.errorMessage = 'Please enter a news title.';

      return;
    }

    if (!this.form.date.trim()) {

      this.errorMessage = 'Please enter the date.';

      return;
    }

    if (!this.form.description.trim()) {

      this.errorMessage =
        'Please enter the news description.';

      return;
    }

    this.saving = true;
    this.errorMessage = '';
    this.successMessage = '';

    try {

      const imageUrl = await this.uploadImage();

      await addDoc(
        collection(db, 'news'),
        {
          title: this.form.title.trim(),
          date: this.form.date.trim(),
          description: this.form.description.trim(),
          imageUrl: imageUrl,
          published: this.form.published,
          createdAt: serverTimestamp()
        }
      );

      this.successMessage =
        'News added successfully.';

      this.resetForm();

      await this.loadNews();

    } catch (error) {

      console.error('Error adding news:', error);

      this.errorMessage =
        'Unable to add news. Please try again.';

    } finally {

      this.saving = false;

    }

  }


  // ================================
  // EDIT NEWS
  // ================================

  editNews(news: NewsItem): void {

    this.editingId = news.id || null;

    this.form = {
      title: news.title,
      date: news.date,
      description: news.description,
      imageUrl: news.imageUrl,
      published: news.published
    };

    this.selectedFile = null;
    this.imagePreview = news.imageUrl;

    this.successMessage = '';
    this.errorMessage = '';

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }


  // ================================
  // UPDATE NEWS
  // ================================

  async updateNews(): Promise<void> {

    if (!this.editingId) {
      return;
    }

    if (!this.form.title.trim()) {

      this.errorMessage = 'Please enter a news title.';

      return;
    }

    if (!this.form.date.trim()) {

      this.errorMessage = 'Please enter the date.';

      return;
    }

    if (!this.form.description.trim()) {

      this.errorMessage =
        'Please enter the news description.';

      return;
    }

    this.saving = true;
    this.errorMessage = '';
    this.successMessage = '';

    try {

      let imageUrl = this.form.imageUrl;

      if (this.selectedFile) {
        imageUrl = await this.uploadImage();
      }

      const newsReference =
        doc(db, 'news', this.editingId);

      await updateDoc(
        newsReference,
        {
          title: this.form.title.trim(),
          date: this.form.date.trim(),
          description: this.form.description.trim(),
          imageUrl: imageUrl,
          published: this.form.published
        }
      );

      this.successMessage =
        'News updated successfully.';

      this.resetForm();

      await this.loadNews();

    } catch (error) {

      console.error('Error updating news:', error);

      this.errorMessage =
        'Unable to update news. Please try again.';

    } finally {

      this.saving = false;

    }

  }


  // ================================
  // DELETE NEWS
  // ================================

  async deleteNews(news: NewsItem): Promise<void> {

    if (!news.id) {
      return;
    }

    const confirmed = confirm(
      `Are you sure you want to delete "${news.title}"?`
    );

    if (!confirmed) {
      return;
    }

    this.errorMessage = '';
    this.successMessage = '';

    try {

      await deleteDoc(
        doc(db, 'news', news.id)
      );

      // Delete image from Firebase Storage if available
      if (news.imageUrl) {

        try {

          const imageReference =
            ref(storage, news.imageUrl);

          await deleteObject(imageReference);

        } catch (imageError) {

          console.warn(
            'News deleted, but image could not be removed:',
            imageError
          );

        }

      }

      this.successMessage =
        'News deleted successfully.';

      await this.loadNews();

    } catch (error) {

      console.error('Error deleting news:', error);

      this.errorMessage =
        'Unable to delete news. Please try again.';

    }

  }


  // ================================
  // PUBLISH / UNPUBLISH
  // ================================

  async togglePublished(news: NewsItem): Promise<void> {

    if (!news.id) {
      return;
    }

    try {

      await updateDoc(
        doc(db, 'news', news.id),
        {
          published: !news.published
        }
      );

      news.published = !news.published;

      this.successMessage = news.published
        ? 'News published successfully.'
        : 'News unpublished successfully.';

    } catch (error) {

      console.error(
        'Error changing publish status:',
        error
      );

      this.errorMessage =
        'Unable to change publish status.';

    }

  }


  // ================================
  // CANCEL EDIT
  // ================================

  cancelEdit(): void {

    this.resetForm();

  }


  // ================================
  // RESET FORM
  // ================================

  resetForm(): void {

    this.editingId = null;

    this.form = {
      title: '',
      date: '',
      description: '',
      imageUrl: '',
      published: true
    };

    this.selectedFile = null;
    this.imagePreview = '';

  }

}