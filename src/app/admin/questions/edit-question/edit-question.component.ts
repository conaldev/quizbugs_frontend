import {Component, OnInit} from "@angular/core";
import {Answer} from "../../../model/answer";
import {Question} from "../../../model/question";
import {ICategory} from "../../../model/ICategory";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {QuestionService} from "../../../service/question.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CategoryService} from "../../../service/category.service";
import {EditSuccessDialogComponent} from '../edit-success-dialog/edit-success-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  answer1: Answer = {
    id: 0,
    answer: '',
    status: false
  };
  answer2: Answer = {
    id: 0,
    answer: '',
    status: false
  };
  answer3: Answer = {
    id: 0,
    answer: '',
    status: false
  };
  answer4: Answer = {
    id: 0,
    answer: '',
    status: false
  };
  typeCheckBox = 1;
  typeSelect = 0;
  question: Question = {
    id: 0,
    question: 'ABC',
    type: 0,
    enabled: true,
    categories: [],
    answers: []
  };
  categories: ICategory[] = [];
  count = 0;
  message = '';
  sub: Subscription;
  id: number;
  questionForm: FormGroup;

  constructor(private fb: FormBuilder,
              private service: QuestionService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.question = this.getQuestion(this.id);
    });
    this.questionForm = this.fb.group({
      question: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      answer4: ['', Validators.required],
      category: ['', Validators.required]
    });
    this.categoryService.getAllCategories().subscribe(res => {
        this.categories = res;
    })
  }
  getQuestion(id: number): any {
    this.service.getQuestion(id).subscribe(qs => {
      this.question = qs;
      this.answer1 = this.question.answers[0];
      this.answer2 = this.question.answers[1];
      this.answer3 = this.question.answers[2];
      this.answer4 = this.question.answers[3];
      this.questionForm = this.fb.group({
        question: [this.question.question, Validators.required],
        answer1: [this.answer1.answer, Validators.required],
        answer2: [this.answer2.answer, Validators.required],
        answer3: [this.answer3.answer, Validators.required],
        answer4: [this.answer4.answer, Validators.required],
        category: [this.question.categories, Validators.required]
      });
    });
  }

  submit(): void {
    if (!this.questionForm.invalid) {
      this.question.question = this.questionForm.get('question').value;
      this.answer1.answer = this.questionForm.get('answer1').value;
      this.answer2.answer = this.questionForm.get('answer2').value;
      this.answer3.answer = this.questionForm.get('answer3').value;
      this.answer4.answer = this.questionForm.get('answer4').value;
      this.question.categories = this.questionForm.get('category').value;
      if (this.answer1.status) {
        this.count++;
      }
      if (this.answer2.status) {
        this.count++;
      }
      if (this.answer3.status) {
        this.count++;
      }
      if (this.answer4.status) {
        this.count++;
      }
      if (this.count >= 2){
        this.question.type = this.typeCheckBox;
      } else {
        this.question.type = this.typeSelect;
      }
      console.log(this.question);
      this.count = 0;
      this.service.updateQuestion(this.question.id, this.question)
        .subscribe(() => {
          // this.router.navigate(['admin/questions/list']);
          this.message = 'Success!';
          const dialogRef = this.dialog.open(EditSuccessDialogComponent);
          dialogRef.afterClosed().subscribe();
        });
    } else {
      this.message = 'UnSuccess!';
      this.count = 0;
    }
  }

  selectedA(): void{
    this.answer1.status = !this.answer1.status;
  }
  selectedB(): void{
    this.answer2.status = !this.answer2.status;
  }
  selectedC(): void{
    this.answer3.status = !this.answer3.status;
  }
  selectedD(): void{
    this.answer4.status = !this.answer4.status;
  }

    cancel() {
        this.router.navigate(['admin/questions/list'])
    }
}
