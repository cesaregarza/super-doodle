import { Component, OnInit } from '@angular/core';
import { QuestionlogicService } from '../questionlogic.service';

@Component({
  selector: 'app-questionpage',
  templateUrl: './questionpage.component.html',
  styleUrls: ['./questionpage.component.css']
})
export class QuestionpageComponent implements OnInit {

  constructor(private questionlogicService: QuestionlogicService) {}

  ngOnInit() {
  }

}
