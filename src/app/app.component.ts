import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title = 'sepehr';
  courseName: string = 'Angular';
  firstName: string = 'sepehr';
  lastName: string = 'nekooie';
  changeColor = 'my2'
  color: string = 'red';
  flag: boolean = true;
  fullName: string = 'sepehrnekooie';
  email: string = 'sepehr@nekooie.com';
  age: number = 20;
  hide: boolean = false;
  favTeam: string = 'Barcelona';
  nickName: string = 'sepehrnk'

  message() :void{
    alert('Event Binding');
  }

  show() :void{
    this.hide = !this.hide;
  }

  onClick(element: any) {
    console.log(element.value)
  }

  @ViewChild('someInput') myInput!: ElementRef;
  ngAfterViewInit(): void {
    this.myInput.nativeElement.value = 'Computer';
  }
}