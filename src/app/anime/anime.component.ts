import { ApiService } from './../service/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css'],
})
export class AnimeComponent implements OnInit {
  animeData: any;
  breakpointHead;
  breakpointBody;

  constructor(
    private service: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.animeData = null;
    this.route.paramMap.subscribe((params) => {
      const animeId = +params.get('id');
      this.service.getAnime(animeId).subscribe(
        (res) => {
          this.animeData = res;
        },
        (err) => {}
      );
    });

    this.breakpointHead = window.innerWidth > 570 ? 2 : 1;
    this.breakpointBody = window.innerWidth <= 950 ? 2 : 3;
    if (window.innerWidth <= 672) {
      this.breakpointBody = 1;
    }
  }

  onResize(event) {
    this.breakpointHead = window.innerWidth > 570 ? 2 : 1;
    this.breakpointBody = window.innerWidth <= 950 ? 2 : 3;
    if (window.innerWidth <= 672) {
      this.breakpointBody = 1;
    }
  }

  getGenre(index) {
    return index == this.animeData.genres.length - 1
      ? this.animeData.genres[index].name
      : this.animeData.genres[index].name + ', ';
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
