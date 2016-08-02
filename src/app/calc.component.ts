import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'calc-app',
  templateUrl: 'calc.component.html',
  styleUrls: ['calc.component.css']
})

export class CalcAppComponent {
  title = 'Incomplete. Don\'t use it to do your taxes. ;-)';
  display = '0';
  op = '';
  mem = '';

  // Note the === and !== operators. TypeScript/JavaScript also have the == and != ops but, they do implicit type conversion!
  // The === and !== ops do not do that. So they are always safer to use.
  push(num: string) {
    if (this.display === '0') {
      if (num !== '00') {
        this.display = num;
      }
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

  // Rather than write the above functions which duplicate a piece/pattern of code
  // we can write a 'higher-order function' which captures the pattern, as follows
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
