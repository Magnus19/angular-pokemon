import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainerService } from './trainer-service';

describe('TrainerService', () => {
  let component: TrainerService;
  let fixture: ComponentFixture<TrainerService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerService],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainerService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
