const APIUtil = require('./api_util')

class UsersSearch {
  constructor(el) {

    this.$el = $(el);
    this.$input = $(el).find("input[name=query]");
    this.$ul = $(el).children("ul.users");

    this.$input.on ('input', this.handleInput.bind(this));
  }

  handleInput() {
    if (this.$input.val() === "") {
      this.renderResults([]);
      return;
    }
    APIUtil.searchUsers(this.$input.val())
      .then(results => this.renderResults(results));
  }

  renderResults(results) {
    this.$ul.empty();

    for (let i = 0; i < results.length; i++){
      let user = results[i];

      let username = user.username
      let href = `href=/users/${user.id}`
      let $a = $("<a></a>");
      $a.text(`${user.username}`);
      $a.attr("href", `href=/users/${user.id}`);
      let $li = $(`<li></li>`)
      $li.append($a);

      this.$ul.append($li);
    }
  }
}

module.exports = UsersSearch;
