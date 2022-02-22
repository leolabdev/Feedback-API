import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';


//  adding a route for accessing the component
// We add a /feedbacks route mapped to FeedbackComponent and a route to redirect the empty path to the /feedbacks path.
const routes: Routes = [

  { path: "", pathMatch: "full", redirectTo: "feedbacks" },
  { path: "feedbacks", component: FeedbackComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
