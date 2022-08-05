import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'Angular','description':'Angular is important for JavaScript programmers that have a thorough understanding of theoretical angular software engineering','image':'../../assets/angular.jpg'},
    {'id':2,'name':'Typescript','description':'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. ','image':'../../assets/typescript.jpg'},
    {'id':3,'name':'Nodejs','description':'To become a Node.js developer, it helps to have background knowledge of coding, debugging, and front-end development.','image':'../../assets/nodejs.jpg'},
    {'id':4,'name':'Reactjs','description':'Reactjs is a free and open-source front-end JavaScript library for building user interfaces based on UI components.','image':'../../assets/reactjs.jpg'},
  ]
}
