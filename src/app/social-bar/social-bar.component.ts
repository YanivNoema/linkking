import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-social-bar',
  templateUrl: './social-bar.component.html',
  styleUrls: ['./social-bar.component.css']
})
export class SoicalBarComponent implements OnInit {
  constructor() { }
  @Input() link: any;
  @Input() img: any;
  items: any;
  ngOnInit() {
    this.items = {
      facebook: this.createFacebookLink(this.link),
      twitter: this.createTwitterLink(this.link),
      linkedin: this.createLinkedinLink(this.link),
      pinterest: this.createPinterestLink(this.link, this.img),
      tumblr: this.createTumblrLink(this.link),
      google: this.createGoogleLink(this.link)
    };
  }

  createTwitterLink(link) {
    const base = 'https://twitter.com/intent/tweet?url=';
    // tslint:disable-next-line:max-line-length
    const text = '&text=Linkiz: This Is One Of The Best Links In The World';
    return `${base}${link}${text}`;
  }

  createFacebookLink(link) {
    const base = 'https://www.facebook.com/sharer/sharer.php?u=';
    return `${base}${link}`;
  }

  createLinkedinLink(link) {
    const base = 'http://www.linkedin.com/shareArticle?mini=true&url=';
    const text = '&title=Linkinz: This is one of the best links in the world';
    return `${base}${link}${text}`;
  }

  createTumblrLink(link) {
    const base = 'http://www.tumblr.com/share?v=3&u=';
    const text = '&t=Linkinz: This is one of the best links in the world';
    return `${base}${link}${text}`;
  }

  createGoogleLink(link) {
    const base = 'https://plus.google.com/share?url=';
    return `${base}${link}`;
  }

  createPinterestLink(link, img) {
    const base = 'http://pinterest.com/pin/create/button/?url=';
    const text = '&description=Linkinz: This is one of the best links in the world';
    const image = `&media=${img}`;
    return `${base}${link}${image}${text}`;
  }
}
