import { action, autorun, reaction, computed, makeAutoObservable, observable, runInAction } from 'mobx';
import axios from 'axios';

const url = "https://my-json-server.typicode.com/mehulchopradev/calc-service/defaultCalcData";

export default class CalculatorStore {
  // state
  firstNo: number = 0;
  secondNo: number = 0;
  operation: string = '+';
  ans: number = 0;

  constructor() {
    makeAutoObservable(this, {
      firstNo: observable,
      secondNo: observable,
      operation: observable,
      ans: observable,
      updateCalcData: action,
      calculate: action,
      fetchDefaultCalcData: action,
      algebraicExp: computed,
      logCalculations: false,
    });

    // reactions
    /* autorun(() => {
      this.logCalculations();
    }); */
    reaction(() => this.ans, (ans) => {
      this.logCalculations();
    });
  }

  fetchDefaultCalcData() {
    axios.get(url)
      .then((response) => {
        const data = response.data;
        const { firstNo, secondNo, operation, ans } = data;
        runInAction(() => {
          this.firstNo = firstNo;
          this.secondNo = secondNo;
          this.operation = operation;
          this.ans = ans;
        });
      })
      .catch((error) => console.error(error));
  }

  // actions
  updateCalcData(name: string, value: string) {
    if (name === 'operator') {
      this.operation = value;
    } else if (name === 'firstNo') {
      this.firstNo = Number(value);
    } else if (name === 'secondNo') {
      this.secondNo = Number(value);
    }
  }

  calculate() {
    switch (this.operation) {
      case '+':
        this.ans = this.firstNo + this.secondNo;
        break;
      case '-':
        this.ans = this.firstNo - this.secondNo;
        break;
      case '*':
        this.ans = this.firstNo * this.secondNo;
        break;
      case '/':
        this.ans = this.firstNo / this.secondNo;
        break;
    }
  }

  // computed property
  get algebraicExp() {
    console.log('computed the algebraic expression');
    return `${this.firstNo} ${this.operation} ${this.secondNo} = ${this.ans}`;
  }

  // side effect
  logCalculations() {
    console.log('Calculation', this.algebraicExp);
  }
}