import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { LoginComponent } from 'src/app/home/login/login.component';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { LanguageService } from 'src/app/_services/language.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { of, throwError, Observable } from 'rxjs';
import { createTranslateLoader } from 'src/app/app.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceStub;
  let alertifyServiceMock;
  var languageServiceMock;

  beforeEach(() => {
    authServiceStub = jasmine.createSpyObj('AuthService', ['login']);
    alertifyServiceMock = jasmine.createSpyObj('AlertifyService', ['success', 'error']);
    languageServiceMock = jasmine.createSpyObj('LanguageService', ['changeLang']);

    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        {provide: AuthService, useValue: authServiceStub},
        {provide: AlertifyService, useValue: alertifyServiceMock},
        {provide: LanguageService, useValue: languageServiceMock}
      ],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        HttpClientModule,
        FormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should call alertifyService error method', fakeAsync(() => {
    authServiceStub.login.and.returnValue(throwError('error'));
    
    component.login();
    tick();
    
    expect(authServiceStub.login).toHaveBeenCalledWith(component.emp);
    expect(alertifyServiceMock.error.calls.count()).toBe(1);
  }));

  it('should call alertifyService error method', fakeAsync(() => {
    authServiceStub.login.and.returnValue(throwError('error'));
    
    component.login();
    tick();
    
    expect(alertifyServiceMock.error.calls.argsFor(0)).toContain('loginError');
  }));

  it('should call languageService changeLang', fakeAsync(() => {
    let selectedLanguage:string = 'en'

    component.onFlagClick(selectedLanguage);
    tick();
    
    expect(languageServiceMock.changeLang.calls.count()).toBe(1);
    expect(languageServiceMock.changeLang).toHaveBeenCalledWith(selectedLanguage);
  }));

  it('should call alertifyService success method', fakeAsync(() => {
    authServiceStub.login.and.returnValue(of(true));
    
    component.login();
    tick();
    
    expect(alertifyServiceMock.success.calls.count()).toBe(1);
    expect(alertifyServiceMock.success.calls.argsFor(0)).toContain('loginSuccess');  
  }));
  
  // it('should translate a string using the key value', fakeAsync(() => {
  //   fixture.detectChanges();
  //   tick();
  //   const compiled = fixture.debugElement.nativeElement;
  //   component.onFlagClick('hu');
  //   fixture.detectChanges();
  //   tick();
  //   expect(compiled.querySelector('h1').textContent).toEqual('REPORTING');
  // })); 
});

