export class God {
  /**
   * @return {Array<Human>}
   */
  static create() {
    const man = new Man('Adam');
    const woman = new Woman('Eve');

    return [man, woman];
  }
}

export class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

export class Man extends Human {
  constructor(name) {
    super(name, 'male');
  }
}

export class Woman extends Human {
  constructor(name) {
    super(name, 'female');
  }
}
