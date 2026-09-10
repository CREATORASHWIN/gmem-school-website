import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  collection,
  getDocs,
  query,
  where,
  orderBy
} from 'firebase/firestore';

import { db } from '../../firebase.config';

interface NewsItem {
  id?: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  published: boolean;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {

  newsItems: NewsItem[] = [];

  loading = true;
  errorMessage = '';

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
        where('published', '==', true),
        orderBy('createdAt', 'desc')
      );

      const snapshot = await getDocs(newsQuery);

      this.newsItems = snapshot.docs.map((docSnapshot) => {

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
        'Unable to load news announcements right now.';

    } finally {

      this.loading = false;

    }

  }

}