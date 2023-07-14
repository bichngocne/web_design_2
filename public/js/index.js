function hide() {
  const list1 = document.querySelector(".list-country");
  const list2 = document.querySelector(".list-money");
  const list3 = document.querySelector(".list-language");

  list1.classList.add("opacity-0");
  list2.classList.add("opacity-0");
  list3.classList.add("opacity-0");
}
document.addEventListener("DOMContentLoaded", () => {
  const btnCountry = document.querySelector(".btn-country");
  const btnMoney = document.querySelector(".btn-money");
  const btnLanguage = document.querySelector(".btn-language");
  document.addEventListener("click", function (event) {

    var isClickInside =
      btnCountry.contains(event.target) ||
      btnMoney.contains(event.target) ||
      btnLanguage.contains(event.target)
      ;
    if (!isClickInside) {
      hide();
    }
  });
  const list1 = document.querySelector(".list-country");

  const listItems = document.querySelectorAll(".list-country .list-group-item");

  btnCountry.addEventListener("click", function (event) {
    hide();
    list1.classList.toggle("opacity-0");
    event.stopPropagation(); // Ngăn chặn sự kiện click lan ra các phần tử khác
  });

  listItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      const value = this.textContent;
      btnCountry.innerHTML = value;
      list1.classList.add("opacity-0");
      event.stopPropagation();
    });
  });

  const list2 = document.querySelector(".list-money");
  const listItems2 = document.querySelectorAll(".list-money .list-group-item");

  btnMoney.addEventListener("click", function (event) {
    hide();
    list2.classList.toggle("opacity-0");
    event.stopPropagation();
  });

  listItems2.forEach(function (item) {
    item.addEventListener("click", function (event) {
      const value = this.textContent;
      btnMoney.innerHTML = value;
      list2.classList.add("opacity-0");
      event.stopPropagation();
    });
  });
  const list3 = document.querySelector(".list-language");
  const listItems3 = document.querySelectorAll(
    ".list-language .list-group-item"
  );

  btnLanguage.addEventListener("click", function (event) {
    hide();
    list3.classList.toggle("opacity-0");
    event.stopPropagation();
  });

  listItems3.forEach(function (item) {
    item.addEventListener("click", function (event) {
      const value = this.textContent;
      btnLanguage.innerHTML = value;
      list3.classList.add("opacity-0");
      event.stopPropagation();
    });
  });
});

// Set the date we're counting down to
var countDownDate = new Date("Oct 4, 2023 4:0:0").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.querySelector(".count-down-date").innerHTML = `
  <div class="group-item text-center d-flex ">
      <div class="item-category-market d-inline-block">
          <div class="days date">${days}</div>
          <div class="content-item text-base text-18 sm-text-12">Days</div>
      </div>
      <div class="item-category-market d-inline-block ml-3">
          <div class="hours date">${hours}</div>
          <div class="content-item text-base text-18 sm-text-12">Hour</div>
      </div>
      <div class="item-category-market d-inline-block ml-3">
          <div class="minutes date">${minutes}</div>
          <div class="content-item text-base text-18 sm-text-12">Minutes</div>
      </div>
      <div class="item-category-market d-inline-block ml-3">
          <div class="seconds date">${seconds}</div>
          <div class="content-item text-base text-18 sm-text-12">Seconds</div>
      </div>
  </div>
`;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".count-down-date").innerHTML = "EXPIRED";
  }
}, 1000);
document.addEventListener("DOMContentLoaded", () => {
  navCate();
  const inputEmail = document.querySelector(".input-email");
  const iconEmail = document.querySelector(".icon-email");

  inputEmail.addEventListener("focus", () => {
    inputEmail.classList.add("active");
    iconEmail.classList.add("active");
  });

  inputEmail.addEventListener("blur", () => {
    inputEmail.classList.remove("active");
    iconEmail.classList.remove("active");
  });
  // main menu

  const mainMenu = document.querySelector(".main-menu");
  const mainMenuScreen = document.querySelector(".main-menu-screen");
  const close = document.querySelector(".btn-close-mainmenu");
  const open = document.querySelector(".open-menu");
  let isOpen = false;
  open.addEventListener("click", () => {
    if (!isOpen) {
      mainMenuScreen.classList.add(
        "bg-opacity-40",
        "w-full",
        "h-screen",
        "z-3",
        "fixed-top"
      );
      mainMenu.style.left = "0";
      isOpen = true;
    } else {
      mainMenu.style.left = "-280px";
      isOpen = false;
    }
  });
  document.addEventListener("click", function (event) {
    var isClickInside =
      mainMenu.contains(event.target) || open.contains(event.target);
    if (!isClickInside) {
      mainMenu.style.left = "-280px";
      mainMenuScreen.classList.remove(
        "bg-opacity-40",
        "w-full",
        "h-screen",
        "z-3",
        "fixed-top"
      );
      isOpen = false;
    }
  });
  close.addEventListener("click", () => {
    mainMenu.style.left = "-280px";
    mainMenuScreen.classList.remove(
      "bg-opacity-40",
      "w-full",
      "h-screen",
      "z-3",
      "fixed-top"
    );
    isOpen = false;
  });

  const wrapperMenu1 = document.querySelector(".wrapper-1");
  const wrapperMenu2 = document.querySelector(".wrapper-2");
  const btnMainMenu = document.querySelector(".btn-main-menu");
  const btnCategory = document.querySelector(".btn-categories");

  btnMainMenu.addEventListener("click", () => {
    btnMainMenu.style.color = "#000";
    btnCategory.style.color = "#797676";
    wrapperMenu2.style.display = "block";
    wrapperMenu1.style.display = "none";
  });
  btnCategory.addEventListener("click", () => {
    btnMainMenu.style.color = "#797676";
    btnCategory.style.color = "#000";
    wrapperMenu2.style.display = "none";
    wrapperMenu1.style.display = "block";
  });
});

function navCate() {
  const menuCategories = document.querySelector(".menu-categories");
  const dropdownCategories = document.querySelector(".dropdown-categories");
  let isOpen = false;
  menuCategories.addEventListener("click", () => {
    if (!isOpen) {
      dropdownCategories.style.height = "400px";
      isOpen = true;
    } else {
      dropdownCategories.style.height = "0";
      isOpen = false;
    }
  });

  document.addEventListener("click", (event) => {
    if (!menuCategories.contains(event.target)) {
      dropdownCategories.style.height = "0";
      isOpen = false;
    }
  });
}
