import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
  constructor(private router: Router){ }
  ngOnInit(){

  }
  goToPosition(){
    this.router.navigate(['/position']);
  }
}
