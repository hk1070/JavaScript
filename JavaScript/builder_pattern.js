// Builder Pattern

export default class Builder {
  withGameDuration(duration) {
    this.gameDuration = duration;
    return this;
  }
  withdogCount(num) {
    this.dogCount = num;
    return this;
  }

  withcatCount(num) {
    this.catCount = num;
    return this;
  }

  build() {
    return new Game(
      this.gameDuration, //
      this.dogCount,
      this.catCount
    );
  }
}
