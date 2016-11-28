module.exports = (Franz, options) => {
  function getMessages() {
    const notify = parseInt($('nav.navbar-sub span.count-num').text(), 10);
    Franz.setBadge(notify);
  }

  Franz.loop(getMessages);
};

