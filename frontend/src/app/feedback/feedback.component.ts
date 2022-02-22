import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Feedback } from '../feedback';



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  // The displayedComumns variable holds the name of the columns that are displayed in the Angular Material Table
  displayedColumns: string[] = ['id', 'project_name', 'project_url', 'project_feedback', 'created', 'modified', 'isValid', 'user'];
  // The dataSource variable  contains the data of the table
  // The dataSource variable  contains the data of the table
  dataSource: any[] = [];
  //the feedback variable will contain the selected feedback from the table.
  feedback: any = {};
  constructor(private apiService: ApiService) { }

  // here we retrieve the feedback from the server when the component is initialized:
  //  subscribe() is a method on the Observable type. The Observable type is a utility
  //  that asynchronously or synchronously streams data to a variety of components or services that have subscribed to the observable.
  ngOnInit() {
    this.apiService.readFeedbacks().subscribe((result) => {
      console.log(result);
      this.dataSource = result;
    })
  }

  selectFeedback(feedback: any) {
    this.feedback = feedback;
    console.log("selected: ", this.feedback);
  }

  newFeedback() {
    this.feedback = {};
  }

  createFeedback(f: any) {
    this.apiService.createFeedback(f.value).subscribe((result) => {
      console.log(result);
    });

  }

  deleteContact(id: any) {
    this.apiService.deleteFeedback(id).subscribe((result) => {
      console.log(result);
    });
  }

  updateContact(f: any) {
    console.log("Update", f.value)
    f.value.id = this.feedback['id'];
    this.apiService.updateFeedback(f.value).subscribe((result) => {
      console.log(result);
    });
  }




} 
