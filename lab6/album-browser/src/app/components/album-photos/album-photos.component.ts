import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ вот это убирает ошибки ngIf/ngFor/routerLink
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
})
export class AlbumPhotosComponent implements OnInit {
  loading = false;
  error = '';

  albumId = 0;
  photos: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.albumId = idParam ? Number(idParam) : 0;

    if (!this.albumId) {
      this.error = 'Invalid album id.';
      return;
    }

    this.loading = true;
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load photos.';
        this.loading = false;
      },
    });
  }
}