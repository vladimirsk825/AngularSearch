import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{

  handleSearch(value: string){
    this.filtro_valor.next(value)

  }

  filtro_valor = new BehaviorSubject<string>('')
  constructor(
    private _http: HttpClient 
  ){
     
  }
  ngOnInit(){
    this._http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((users : any) => this.usuarios.next(users))
  }

  usuarios = new BehaviorSubject<any[]>([])
}  
