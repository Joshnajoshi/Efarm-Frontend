import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-register-farmer',
  templateUrl: './register-farmer.component.html',
  styleUrls: ['./register-farmer.component.css']
})
export class RegisterFarmerComponent implements OnInit {

  name=''
  phone=''
  email=''
  address1=''
  address2=''
  city=''
  state=''
  pincode=''
  larea=''
  laddress=''
  accno=''
  ifsc=''
  password=''
  error:boolean=false;

  constructor(private http:HttpClient,private router:Router,) { }

  ngOnInit(): void {
    
  }
  userRegister()
  {
let user =
{
"fullName":this.name,
"contactNo":this.phone,
"email":this.email,
"address1":this.address1,
"address2":this.address2,
"city":this.city,
"state":this.state,
"pincode":this.pincode,
"landArea":this.larea,
"landAddress":this.laddress,
"accountNo":this.accno,
"ifsc":this.ifsc,
"password":this.password
    }
    if(this.name!='' && this.phone!='' && this.email!='' && this.address1!='' && this.city!='' && this.state!='' && this.larea!='' && this.pincode!='' && this.laddress!='' && this.accno!='' && this.ifsc!='' && this.password!='')
{
    this.register(user)
    .subscribe(response =>{
      this.error=false;
      this.router.navigate(['/login'])
      alert("The form was submitted");
    })
  }
  else{
    this.error=true;
  }
   }

  register(user:any):Observable<any>
  {
    return this.http.post(`http://localhost:9095/eFam/farmer/register`,user)
  }
}