const APIUtil = {
  followUser: id => (
    $.ajax ({
      url: `/users/${id}/follow`,
      method: 'POST',
      dataType: "json"
    })
  ),

  unfollowUser: id => (
    $.ajax ({
        url: `/users/${id}/follow`,
        method: 'DELETE',
        dataType: "json"
    })
  ),

  searchUsers: query => (
    $.ajax({
      url: '/users/search',
      dataType: "json",
      method: 'GET',
      data: {query}
    })
  )
};

module.exports = APIUtil;
