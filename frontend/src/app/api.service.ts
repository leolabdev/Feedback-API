import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public readFeedbacks() {
    return this.httpClient.get<Feedback[]>(`${this.API_SERVER}/feedbacks`);
  }

  public createFeedback(feedback: Feedback) {
    return this.httpClient.post<Feedback>(`${this.API_SERVER}/feedbacks/create`, feedback);
  }

  public updateFeedback(feedback: Feedback) {
    return this.httpClient.put<Feedback>(`${this.API_SERVER}/feedbacks/${feedback.id}/update`, feedback);
  }

  public deleteFeedback(id: number) {
    return this.httpClient.delete(`${this.API_SERVER}/feedbacks/${id}/delete`);
  }


}
