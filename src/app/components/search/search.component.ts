import { ChangeDetectionStrategy, Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {



  ngOnInit() {
    this.search.valueChanges
    .pipe(
      debounceTime(300)
      
    )
    .subscribe(value => this.SearchEmiter.emit(value))
  }

  search = new FormControl('')

  @Output('search') SearchEmiter = new EventEmitter<string>();

}    
