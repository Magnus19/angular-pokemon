import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaderInfoComponent } from './leader-info';

describe('LeaderInfoComponent', () => {
  let component: LeaderInfoComponent;
  let fixture: ComponentFixture<LeaderInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaderInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeaderInfoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display age, location, and toggle a monologue', () => {
    component.name = 'Brock';
    component.age = 15;
    component.location = 'Pewter City';
    component.monologue = 'I am the strongest rock trainer in Kanto!';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Age');
    expect(compiled.textContent).toContain('15');
    expect(compiled.textContent).toContain('Pewter City');

    const button = compiled.querySelector('button') as HTMLButtonElement;
    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Monologue');

    button.click();
    fixture.detectChanges();
    expect(compiled.textContent).toContain('I am the strongest rock trainer in Kanto!');
  });
});
