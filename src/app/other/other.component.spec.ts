import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { OtherComponent } from './other.component';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Rx';

describe('OtherComponent', () => {
  let component: OtherComponent;
  let fixture: ComponentFixture<OtherComponent>;
  let spy;
  let dataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ OtherComponent ],
      providers: [DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherComponent);
    component = fixture.componentInstance;
    DataService 
    dataService = fixture.debugElement.injector.get(DataService);
    spy = spyOn(dataService, 'get')
      .and.returnValue(Observable.of({name: 'suttermon', sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png'}}));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change name', async(() => {
    const fixture = TestBed.createComponent(OtherComponent);
    const other = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    
    expect(compiled.querySelector('.api-data>.name').innerHTML).toContain('suttermon');
  }));

  it('should change the image src', async(() => {
    const fixture = TestBed.createComponent(OtherComponent);
    const other = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    
    expect(compiled.querySelector('.api-data>img').src).toEqual('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png');
  }));
});
