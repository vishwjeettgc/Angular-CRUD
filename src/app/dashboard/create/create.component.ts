import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PostService } from '../post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  name: any;
  phone: any;
  phone_number: any;
  formdata!: FormGroup;
  id: any;
  post: any;
  type='submit';
  Id: any;
  mode: any;


  
   
  constructor(private crudHttpService: PostService,
    public postService: PostService,private route: ActivatedRoute,
    private router: Router

  ) { }
  ngOnInit(): void {
    this.mode = this.route.snapshot.params['postId'];
    if(this.mode){
      console.log(this.mode)

      this.postService.getbyid(this.mode).subscribe(res=>{
        this.formdata.patchValue(res)
        this.post = res;
        console.log(res)
      })
    } 

  
    console.log(this.mode)
    this.formdata = new FormGroup({
      name: new FormControl("", Validators.compose([
         Validators.required,
      
      ])),
      phone: new FormControl("", Validators.required,)
   });
  }

  onClickSubmit(data:any){
    if(this.formdata.invalid){
return
    }
    else
    console.log(  data)
    if (!this.mode) {
      this.createUser(data);
  } else {
      this.updateUser(data);
  }


  }
  updateUser(data:any) {
    let todo = {
      id: new Date().getTime(),
      name: data.name,
      phone: data.phone
    }
    this.crudHttpService.update( this.mode,todo).subscribe((response)=>{
      this.router.navigate(['dashboard/index'])
    },(error=>{

    }));
  }
  createUser(data:any) {
    console.log(    this.formdata.value)
    let todo = {
      id: new Date().getTime(),
      name: data.name,
      phone: data.phone
    }
  
       this.crudHttpService.create(todo).subscribe((response)=>{
        this.router.navigate(['dashboard/index'])
        console.log(response)
      },(error=>{
  
      }));
  }
 
}
