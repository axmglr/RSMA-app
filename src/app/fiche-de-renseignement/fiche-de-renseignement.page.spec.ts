import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FicheDeRenseignementPage } from './fiche-de-renseignement.page';

describe('FicheDeRenseignementPage', () => {
  let component: FicheDeRenseignementPage;
  let fixture: ComponentFixture<FicheDeRenseignementPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheDeRenseignementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FicheDeRenseignementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
