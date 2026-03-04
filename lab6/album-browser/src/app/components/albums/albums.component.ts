import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  loading = true;
  albums: Album[] = [];
  error = '';

  constructor(private albumService: AlbumService, private zone: NgZone) {}

  ngOnInit(): void {
    console.log('ngOnInit fired ✅');
    this.loading = true;
    this.error = '';

    this.albumService.getAlbums().subscribe({
      next: (data) => {
        console.log('ALBUMS:', data);

        this.zone.run(() => {
          this.albums = data;
          this.loading = false;
        });
      },
      error: (e) => {
        console.error('ALBUMS ERROR:', e);

        this.zone.run(() => {
          this.error = 'Failed to load albums';
          this.loading = false;
        });
      },
    });
  }

  deleteAlbum(id: number, event: MouseEvent): void {
    event.stopPropagation();

    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.zone.run(() => {
          this.albums = this.albums.filter((a) => a.id !== id);
        });
      },
      error: (e) => console.error('DELETE ERROR:', e),
    });
  }
}