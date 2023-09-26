// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보 : 이름, 부서이름, 한 달 근무 시간
// 매달 직원들의 정보를 이용해서 한 달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

{
  class Employee {
    constructor(name, partName, workTime) {
      this.name = name;
      this.partName = partName;
      this.workTime = workTime;
    }

    salary() {
      if (this.partName === '정직원') return this.workTime * 10000;
      else if (this.partName === '파트타임직원') return this.workTime * 8000;
      else return '부서가 올바르지 않습니다.';
    }
  }

  const staff1 = new Employee('이름', '정직원', 10);
  const staff2 = new Employee('이름', '파트타임직원', 20);
  const staff3 = new Employee('이름', '함정', 20);
  console.log(staff1.salary());
  console.log(staff2.salary());
  console.log(staff3.salary());
}

{
  class Employee {
    constructor(name, department, hoursPerMonth, payRate) {
      this.name = name;
      this.department = department;
      this.hoursPerMonth = hoursPerMonth;
      this.payRate = payRate;
    }

    calculatePay() {
      return this.hoursPerMonth * this.payRate;
    }
  }

  class FullTimeEmployee extends Employee {
    static PAY_RATE = 10000;
    constructor(name, department, hoursPerMonth) {
      super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
    }
  }

  class PartTimeEmployee extends Employee {
    static PAY_RATE = 8000;
    constructor(name, department, hoursPerMonth) {
      super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
    }
  }

  const bmc = new FullTimeEmployee('병민', 's/w', 30);
  const bob = new PartTimeEmployee('밥', 's/w', 20);
  console.log(bmc.calculatePay());
  console.log(bob.calculatePay());
}
