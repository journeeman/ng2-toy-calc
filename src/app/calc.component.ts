import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'calc-app',
  templateUrl: 'calc.component.html',
  styleUrls: ['calc.component.css']
})

export class CalcAppComponent {
  title = 'Calculator';
  display = '0';
  op = '';
  mem = '';

  push(num: string) {
    if (this.display === '0') {
      this.display = num;
    } else {
      this.display = this.display + num;
    }
  }

  clear() {
    this.display = '0';
  }

  /*
  sum() {
    this.op = '+';
    this.mem = this.display;
    this.display = '0';
  }

  sub() {
    this.op = '-';
    this.mem = this.display;
    this.display = '0';
  }

  mul() {
    this.op = '*';
    this.mem = this.display;
    this.display = '0';
  }

  div() {
    this.op = '/';
    this.mem = this.display;
    this.display = '0';
  }

  exp() {
    this.op = '^';
    this.mem = this.display;
    this.display = '0';
  }
  */

  // rather than write the above functions which duplicate a piece/pattern of code,
  // we can write a 'higher-order procedure' which captures the pattern, as follows
  makeOp(op: string) {
    return (() => { 
      this.op = op;
      this.mem = this.display;
      this.display = '0';
    });
  }

  sum = this.makeOp('+');
  sub = this.makeOp('-');
  mul = this.makeOp('*');
  div = this.makeOp('/');
  exp = this.makeOp('^');

  compute() {
    switch (this.op) {
      case '+':
        this.display = (parseInt(this.display) + parseInt(this.mem)).toString();
        break;
      case '-':
        this.display = (parseInt(this.mem) - parseInt(this.display)).toString();
        break;
      case '*':
        this.display = (parseInt(this.display) * parseInt(this.mem)).toString();
        break;
      case '/':
        this.display = (parseInt(this.mem) / parseInt(this.display)).toString();
        break;
    }
  }
}
