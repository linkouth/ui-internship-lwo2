export class God {
  /**
   * @return {Array<Human>}
   */
  static create() {
    return [new Man('Adam'), new Woman('Eve')];
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
