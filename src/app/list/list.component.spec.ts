import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it( 'should display the title', () => {
    component.title = 'test title';
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('test title');
  });

  it( 'should display the items in a list', () => {
    component.listItems = ['item 1', 'item 2', 'item 3'];
    fixture.detectChanges();

    const debugElement = fixture.debugElement.query(By.css('ul'));
    expect(debugElement.children[0].nativeElement.textContent).toContain('item 1');
    expect(debugElement.children[1].nativeElement.textContent).toContain('item 2');
    expect(debugElement.children[2].nativeElement.textContent).toContain('item 3');
  });
});
