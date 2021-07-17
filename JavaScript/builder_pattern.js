// Builder Pattern
export default class Builder {
  withGameDuration(duration) {
    this.gameDuration = duration;
    return this;
  }
  withCarrotCount(num) {
    this.dogCount = num;
    return this;
  }

  withBugCount(num) {
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
