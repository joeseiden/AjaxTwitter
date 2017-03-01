const FollowToggle = require('./follow_toggle.js');


$(document).ready(
  () => {const createFollowToggle = () => {
  $('.follow-toggle').each((_, el) => {new FollowToggle(el)});
  };
  createFollowToggle();}
);
