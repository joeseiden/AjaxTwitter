const FollowToggle = require('./follow_toggle.js');
const APIUtil = require('./api_util.js');

$(document).ready(
  () => {const createFollowToggle = () => {
  $('.follow-toggle').each((_, el) => {new FollowToggle(el)});
  };
  createFollowToggle();}
);
