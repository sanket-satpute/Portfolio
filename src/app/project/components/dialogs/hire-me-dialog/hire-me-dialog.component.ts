import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-hire-me-dialog',
  templateUrl: './hire-me-dialog.component.html',
  styleUrls: ['./hire-me-dialog.component.css']
})
export class HireMeDialogComponent {
  constructor(protected appTs: AppComponent) {}
}
