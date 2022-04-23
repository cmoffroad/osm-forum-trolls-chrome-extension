const trolls = [ 9390 ];
const links = trolls.map(id => `a[href="profile.php?id=${id}"]`);
const elements = document.querySelectorAll(links.join(', '));
for (var i = 0, l = elements.length; i < l; i++) {
  elements[i].closest('.blockpost').style.display = 'none';
}