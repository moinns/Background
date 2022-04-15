const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const ID = anchor.getAttribute('href').substring(1);

    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  });
}
