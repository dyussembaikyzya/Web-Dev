import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
})
export class AlbumDetailComponent implements OnInit {
  loading = true;
  saving = false;
  error = '';
  savedMsg = '';

  albumId = 0;
  album: Album | null = null;

  // ВАЖНО: редактируем не напрямую album.title, а через отдельное поле
  editedTitle = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchAlbum();
  }

  private fetchAlbum(): void {
    this.loading = true;
    this.error = '';
    this.savedMsg = '';

    this.albumService.getAlbum(this.albumId).subscribe({
      next: (a) => {
        this.album = a;
        this.editedTitle = a.title; // заполняем input
        this.loading = false;
      },
      error: (e) => {
        console.error(e);
        this.error = 'Failed to load album';
        this.loading = false;
      },
    });
  }

  save(): void {
    if (!this.album) return;

    const newTitle = this.editedTitle.trim();
    if (!newTitle) {
      this.error = 'Title cannot be empty';
      return;
    }

    this.saving = true;
    this.error = '';
    this.savedMsg = '';

    const updated: Album = { ...this.album, title: newTitle };

    this.albumService.updateAlbum(updated).subscribe({
      next: (resp) => {
        // JSONPlaceholder вернёт объект, но не сохранит "навсегда" — это ок.
        // Главное — обновляем UI
        this.album = { ...this.album!, title: resp.title ?? newTitle };
        this.savedMsg = 'Saved ✅';
        this.saving = false;
      },
      error: (e) => {
        console.error(e);
        this.error = 'Failed to save';
        this.saving = false;
      },
    });
  }
}