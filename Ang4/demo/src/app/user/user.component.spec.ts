// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { UserComponent } from './user.component';

// describe('UserComponent', () => {
//   let component: UserComponent;
//   let fixture: ComponentFixture<UserComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ UserComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UserComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
  fdescribe('UserComponent',()=>{
    it("This is the first test script",()=>{
      // var a=10*2
      function add(a: number,b: number){
        var x=a+b
        return x
      }
      var result=add(20,400)
      expect(result).toBe(420)
    })
    it("This is the second test script",()=>{
      // var a=10*2
      function add(c: number,d: number){
        var x=c+d
        return x
      }
      var result=add(20,40)
      expect(result).toBe(60)
    })
  })
// });
