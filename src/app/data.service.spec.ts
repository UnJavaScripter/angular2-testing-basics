import { TestBed, inject } from '@angular/core/testing';

import { MockBackend, MockConnection } from '@angular/http/testing';

import { HttpModule, ResponseOptions, Response } from '@angular/http';
import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [DataService, MockBackend]
    });
  });

  it('should ...', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  it('should make a request', inject([DataService, MockBackend], (service: DataService, mockBackend: MockBackend) => {
    mockBackend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({name: 'suttermon'})
      });
      connection.mockRespond(new Response(options));
    });

    service.get(88).subscribe(response => {
      expect(response.json()).toEqual({name: 'suttermon'});
    }).unsubscribe();
  }))

});
