// import { TestBed } from '@angular/core/testing';

// import { AuthService } from './auth.service';

// describe('AuthService', () => {
//   let service: AuthService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(AuthService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
 import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[AuthService]
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
  it('it should register user',()=>{
    let user = {
      error:false,
      message:"Data posted sucessfully",
      data:{
      email: "example@gmail.com",
      fName: "example",
      password: "password123",
      role: "User"
     
    }
  }
  
    service.addData(user).subscribe(res=>{
      expect(res).toEqual(user);
    })
    
       
    const req = httpTestingController.expectOne({
      method: 'POST',
      url: `http://localhost:4200/users/register`,
    });
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json')
    req.flush(user);
  })


  it("it should login user",()=>{
    let response  = {
      error: false,
      message: "login Sucessfull",
    data:{
      fName: "example",
      role: "Admin",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmTmFtZSI6InNoYWZpIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNjQ2MzAxOTE0LCJleHAiOjE2NDYzMzA3MTR9.4cH4nDHq2fMHpFjElyr_f1UDVeK2TCAJtKHYr7V-vaU",
    } 
    }
    service.getData(response).subscribe(res=>{
      expect(res).toEqual(response);
    })
       
    const req = httpTestingController.expectOne({
      method: 'POST',
      url: `http://localhost:4200/users/login`,
    });
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json')
    req.flush(response);
  })

  it("it should get gluco reports",()=>{
    let glRep = 
      {
     
          
            calcium: '120',
            fastingbloodsugar: '123',
            hba1c: '1230',
            postprandilabloodsugar: '125',
            _id: '621c51f778b12832de0abaef',
          }

        service.addglData(glRep).subscribe((res)=>{
          expect(res).toEqual(glRep)
        })
        let req  = httpTestingController.expectOne({
          method: 'GET',
          url: `http://localhost:4200/test/viewglrepo`,
        })
        expect(req.cancelled).toBeFalsy();
        expect(req.request.responseType).toEqual('json')
        req.flush(glRep)

        it("it should get thyroid reports",()=>{
      
      let thyRep=
          {
            t3Total: '64',
            thyroxine: '28',
            tsh: '2528',
            _id: '621cba7776c5fefc89d9ddb1',
          }
    
    service.addthData(thyRep).subscribe((res)=>{
      expect(res).toEqual(thyRep)
    })
    
    let req  = httpTestingController.expectOne({
      method: 'GET',
      url: `http://localhost:4200/test/viewrepo`,
    })
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json')
    req.flush(thyRep)
  })

});
})