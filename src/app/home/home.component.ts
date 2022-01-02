import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  topAiringAnimes: any = [];
  topTvAnimes: any = [];
  topUpcomingAnimes: any = [];

  constructor(private service: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.service.getTopAiringAnimes().subscribe(
      (res: any) => {
        if (res) {
          const arr = (res.top as []).slice(0, 20);
          this.topAiringAnimes = arr;
        }
      },
      (err) => {}
    );

    this.service.getTopAnimes().subscribe(
      (res: any) => {
        if (res) {
          const arr = (res.top as []).slice(0, 20);
          this.topTvAnimes = arr;
        }
      },
      (err) => {}
    );

    this.service.getTopUpcomingAnimes().subscribe(
      (res: any) => {
        if (res) {
          const arr = (res.top as []).slice(0, 20);
          this.topUpcomingAnimes = arr;
        }
      },
      (err) => {}
    );
  }

  openAnime(animeId): void {
    this.router.navigate(['/anime', animeId]);
  }
}
