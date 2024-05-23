document.onscroll = () => {
  const arrow = document.getElementById("scroll-arrow");
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const scrollHeight = document.body.scrollHeight;
  const scrollPercent = (scrollPosition / (scrollHeight - windowHeight)) * 100;
  if (scrollPercent > 1) {
    arrow.style.opacity = 0;
  } else {
    arrow.style.opacity = 1;
  }
};
