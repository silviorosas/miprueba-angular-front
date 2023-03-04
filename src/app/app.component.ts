import { Component } from '@angular/core';
import { Persona } from './model/persona';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    personas: Persona[]=[]

  constructor(private service:ServiceService){}

  ngOnInit(){
    //this.traerPersonas();
  }
 datos:any=[];
  title = 'angulargo';

  traerPersonas(){
    this.service.listarPersonas().subscribe(
      (res:any)=>{
        
        console.log(res)
      },
      error =>{
        console.log(error,"este error sale de traerPersonas angular")
      }
    )
  }

}
