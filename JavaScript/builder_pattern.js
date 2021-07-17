// Builder Pattern

export default class GameBuilder {
  withGameDuration(duration) {
    this.gameDuration = duration;
    return this;
  }
  withDogCount(num) {
    this.dogCount = num;
    return this;
  }

  withCatCount(num) {
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
