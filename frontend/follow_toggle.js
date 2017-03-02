const APIUtil = require('./api_util')

class FollowToggle {
  constructor(el, options) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id") || options.userId;
    this.followState = (this.$el.data("initial-follow-state") ||
                        options.followState);

    this.$el.on("click", this.handleClick.bind(this));
    this.render();
  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.text("Follow!");
    } else if (this.followState === "followed") {
      this.$el.text("Unfollow!");
    }
  }

  handleClick (event) {
    event.preventDefault();
    if (this.followState === "unfollowed"){
      APIUtil.followUser(this.userId)
        .then(() => {
          this.followState = "followed";
          this.render();
        });
    } else if (this.followState === "followed"){
      APIUtil.unfollowUser(this.userId)
        .then(() => {
          this.followState = "unfollowed";
          this.render();
        });
    }
  }
}


module.exports = FollowToggle;
