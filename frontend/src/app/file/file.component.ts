import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { Post } from '../post';


@Component({
  selector: 'app-file',
  standalone: true,
  imports: [
    MatIcon,
    NgIf,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatButton,
    FormsModule,
    FormsModule
  ],
  templateUrl: './file.component.html',
  styleUrl: './file.component.css'
})
export class FileComponent {
  employee:any={id_employee:"",nom_complet:"",date_embauche:null,id_post:""};
  file:any={mois:"",annee:"",id_employee:"",id_post:""};
  post:any={id_post:"",nom_post:"",montant:0,prime_variable:0,salaire_base:0,transport:500,panier:500};
  constructor(private http:HttpClient,private service:ServiceService,private route:ActivatedRoute,private router:Router) {
  }
  id_emp:any;
  id_post:any;
  post_prime:Post={
    id_post: 1,
    nom_post: '',
    prime_variable: 0,
    salaire_base: 0
  };

  
  ngOnInit() {
    this.id_emp=this.route.snapshot.params['id']; 
    this.id_post=this.route.snapshot.params['id2']; 
    this.employee.id_employee=this.id_emp;
    this.employee.id_post=this.id_post;
    
  }
  // getPost(): void {
  //   this.service.getPoST(this.post_prime.id_post).subscribe(data => this.post_prime = data);
  //   console.log(this.post_prime);
  // }
    submit(){
      this.file.id_employee=this.id_emp;
      this.file.id_post=this.id_post;
        this.service.savefile(this.file).
        subscribe(data=>this.file=data);
        alert('Operation bien faite');
        this.router.navigate(["/filed",this.file.id_employee,this.file.id_post,this.post.montant,this.post.salaire_base,this.post.prime_variable]);
    }
    calculer(){
      this.post.montant=this.post.transport+this.post.panier+this.post.salaire_base+this.post.prime_variable;
    }
}