import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  userData: any;
  constructor(private TokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    this.userData = this.TokenStorageService.getUser();
  }
}
