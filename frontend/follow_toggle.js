class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = $(el).data('user-id');
    this.followState = $(el).data('initial-follow-state');

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
      this.followUser()
    } else if (this.followState === "followed"){
      this.unfollowUser()
    }
  }

  followUser() {
    $.ajax ({
      url: `/users/${this.userId}/follow`,
      type: 'POST',
      dataType: "json"
    })
    this.followState = "followed";
    this.render();
  };

  unfollowUser() {
    $.ajax ({
        url: `/users/${this.userId}/follow`,
        type: 'DELETE',
        dataType: "json"
    })
    this.followState = "unfollowed";
    this.render();
  };
}


module.exports = FollowToggle;
