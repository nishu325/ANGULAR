import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`h1{color:red;}`]
})
export class AppComponent {
  fontSizePx = 16;
  title = 'Angular-Assignment';
  public name="Nishu";
  public message="";
  /*Display values with interpolation */
  public customerName="nishu patel";
  public lowerCase="LOWERCASE USING PIPE";
  todayDate = new Date(2021, 3, 7); 

  public imageUrl="/assets/Images/sample image.jpeg";

  

}
