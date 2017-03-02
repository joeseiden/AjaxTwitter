const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search')
const APIUtil = require('./api_util');

$(document).ready(
  () => {const createFollowToggle = () => {
  $('.follow-toggle').each((_, el) => {new FollowToggle(el)});
  };
  createFollowToggle();}
);

$(document).ready(
  () => {const createUsersSearch = () => {
  $('nav.users-search').each((_, el) => {new UsersSearch(el)});
  };
  createUsersSearch();}
);
