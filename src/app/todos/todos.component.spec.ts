import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiMockService } from '../api-mock.service';
import { TodoDataService } from '../todo-data.service';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionService } from 'app/session.service';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      imports: [RouterTestingModule],
      providers: [
        AuthService,
        SessionService,
        TodoDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            data: Observable.of({
              todos: []
            })
          }
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
