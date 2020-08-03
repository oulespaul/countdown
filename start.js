(() => {
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  function setInnerText(id, text) {
    const element = document.getElementById(id);
    element.innerText = text;
  }

  function countDown() {
    const now = new Date().getTime();
    const newYear = new Date("December 31, 2020 23:59:59").getTime();
    const unixTimeLeft = newYear - now;

    setInnerText("days", Math.floor(unixTimeLeft / DAY));
    setInnerText("hours", Math.floor((unixTimeLeft % DAY) / HOUR));
    setInnerText("minutes", Math.floor((unixTimeLeft % HOUR) / MINUTE));
    setInnerText("seconds", Math.floor((unixTimeLeft % MINUTE) / SECOND));
  }

  function run() {
    setInterval(countDown, SECOND);
  }
  run();
})();
