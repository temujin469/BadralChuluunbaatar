const header = `
  <header class="fixed top-0 left-0 w-full"  id="navbar">
    <nav class="myContainer px-5 flex justify-between items-center h-[80px] md:h-[100px]">
    <a href="/">
    <img src="../images/logo2.png"  class="h-[60px] md:h-[90px]" />
    </a>
      <div class="text-white text-2xl md:hidden" id="menu-button">
        <i class="fa-sharp fa-solid fa-bars"></i>
      </div>
      <ul
        class="flex gap-5 fixed transition duration-150  left-[-100%] top-0 py-10 px-20 md:p-0 w-[280px] md:w-auto h-screen md:h-auto md:static flex-col md:flex-row bg-[#2F2F2F] md:bg-transparent"
        id="menu">
        <li class="w-full flex justify-center md:hidden">
          <img src="../images/logo2.png" />
        </li>
        <li class="hover:border-white border-b-2 border-transparent p-1">
          <a href="#" class="text-white">BIOGRAPHY</a>
        </li>
        <li class="hover:border-white border-b-2 border-transparent p-1">
          <a href="#" class="text-white">SCHEDULE</a>
        </li>
        <li class="hover:border-white border-b-2 border-transparent p-1">
          <a href="#" class="text-white">MEDIA</a>
        </li>
        <li class="hover:border-white border-b-2 border-transparent p-1">
          <a href="/news.html" class="text-white">NEWS</a>
        </li>
        <li class="hover:border-white border-b-2 border-transparent p-1">
          <a href="#" class="text-white">AWARDS</a>
        </li>
        <li class="hover:border-white border-b-2 border-transparent p-1">
          <a href="#" class="text-white">REPERTOIRE</a>
        </li>
        <li class="hover:border-white border-b-2 border-transparent p-1">
          <a href="#" class="text-white">CONTACT</a>
        </li>
        <li class=" border-2 p-1 hidden lg:block">
          <a href="#" class="text-white">EN:MN</a>
        </li>
      </ul>
    </nav>
    </header>
`;

const headerContainer = document.getElementById("header");
headerContainer.innerHTML = header;

const menuBtn = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("left-[0px]");
});

function changeBg() {
  var scrollVal = window.scrollY;
  var navbar = document.getElementById("navbar");
  if (scrollVal > 80) {
    navbar.classList.add("bg-[#000]");
  } else {
    navbar.classList.remove("bg-[#000]");
  }
}

window.addEventListener("scroll", changeBg);
