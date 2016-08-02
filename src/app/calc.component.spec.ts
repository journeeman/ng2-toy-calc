import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CalcAppComponent } from '../app/calc.component';

beforeEachProviders(() => [CalcAppComponent]);

describe('App: Calc', () => {
  it('should create the app',
      inject([CalcAppComponent], (app: CalcAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'calc works!\'',
      inject([CalcAppComponent], (app: CalcAppComponent) => {
    expect(app.title).toEqual('calc works!');
  }));
});
