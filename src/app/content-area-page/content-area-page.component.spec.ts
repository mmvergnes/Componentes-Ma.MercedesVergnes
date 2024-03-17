import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAreaPageComponent } from './content-area-page.component';

describe('ContentAreaPageComponent', () => {
  let component: ContentAreaPageComponent;
  let fixture: ComponentFixture<ContentAreaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentAreaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentAreaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
