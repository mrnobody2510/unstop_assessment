import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-add-assessment',
  templateUrl: './add-assessment.component.html',
  styleUrls: ['./add-assessment.component.scss'],
})
export class AddAssessmentComponent implements OnInit {
  newAssessmentForm!: FormGroup;
  skills: string[] = [
    'UI/UX and Design',
    'No of Question',
    'Web Development',
    'UI/UX and Design',
    'Web Development',
  ];

  ngOnInit(): void {
    this.initNewAssessment();
  }

  constructor(private formBuilder: FormBuilder) {}

  initNewAssessment(): void {
    this.newAssessmentForm = this.formBuilder.group({
      assessmentName: [''],
      purposeOfTest: [''],
      description: [''],
      skills: [''],
      duration: [''],
    });
  }
}
