import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAssessmentComponent } from './add-assessment/add-assessment.component';

@Component({
  selector: 'app-assessment-overview',
  templateUrl: './assessment-overview.component.html',
  styleUrls: ['./assessment-overview.component.scss'],
})
export class AssessmentOverviewComponent {
  constructor(private dialog: MatDialog) {}

  openNewAssessment(): void {
    this.openDialog();
  }

  openDialog(): void {
    this.dialog.open(AddAssessmentComponent, {
      width: '300px',
      height: '100%',
      panelClass: 'my-dialog',
    });
  }
}
