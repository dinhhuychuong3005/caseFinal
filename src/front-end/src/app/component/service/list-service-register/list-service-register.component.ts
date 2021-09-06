import {Component, Input, OnInit} from '@angular/core';
import {CategoryServiceService} from '../../../service/service/category-service.service';
import {categoryService} from '../../../models/categoryService/categoryService';

@Component({
  selector: 'app-list-service-register',
  templateUrl: './list-service-register.component.html',
  styleUrls: ['./list-service-register.component.css']
})
export class ListServiceRegisterComponent implements OnInit {
  @Input() listService: categoryService[] = [];


  constructor() { }

  ngOnInit(): void {

  }

}
