import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMarketplaceComponent } from './view-marketplace.component';

describe('ViewMarketplaceComponent', () => {
  let component: ViewMarketplaceComponent;
  let fixture: ComponentFixture<ViewMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMarketplaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
