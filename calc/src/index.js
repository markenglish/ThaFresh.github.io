import "bootstrap";
import "alpinejs";

window.form = function () {
  return {
    followersFB: 1000,
    followersInsta: 1000,
    followersLI: 1000,
    associated: null,
    associatedLeader: null,
    associatedFollowers: 200,
    perceivedQuality: 0,
    customerContact: 0,
    potential: 0,
    loyalty: 0,
    scoreRaw: 0,

    doCalc() {
      this.scoreRaw =
        parseInt(this.followersFB) +
        parseInt(this.followersInsta) +
        parseInt(this.followersLI) +
        parseInt(this.associatedFollowers) +
        parseInt(this.perceivedQuality) +
        parseInt(this.customerContact) +
        parseInt(this.potential) +
        parseInt(this.loyalty);
      return this.scoreRaw;
    },
  };
};
