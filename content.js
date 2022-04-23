const trolls = [ 'Bernhard Hiller' ];
const elements = document.querySelectorAll('strong');
for (let i = 0, l = elements.length; i < l; i++) {
  const strong = elements[i];
  if (trolls.includes(strong.textContent)) {
    strong.closest('.blockpost').style.display = 'none';
  }
}