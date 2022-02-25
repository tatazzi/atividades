
function toggleMenu() {
  var menuArea = document.getElementsByClassName("menu-area");
  var classList = menuArea.item(0).classList;
  classList.contains('open') ? classList.remove('open') : classList.add("open")
}