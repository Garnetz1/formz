import { Component, OnInit } from '@angular/core';
//import {NgForm} from '@angular/forms';
import { IUser } from '../iuser';


@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];
  //userModel = new User('rob', 'rob@gmail.com', 08966736738, '', 'morning', true)
  public userModel: IUser[] = [
    {name:"Omotola Oladokun", 
    email:'ojuliettola@yahoo.com', 
    phone: 08105647454, 
    topic: '', 
    timePreference:'morning',
    subscribe: true}
  ];

  ngOnInit(): void {
  }

}
