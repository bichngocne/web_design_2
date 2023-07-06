function hide() {
  const list1 = document.querySelector(".list-country");
  const list2 = document.querySelector(".list-money");
  const list3 = document.querySelector(".list-language");

  list1.classList.add("d-none");
  list2.classList.add("d-none");
  list3.classList.add("d-none");
}
function country() {
  const btnCountry = document.querySelector(".btn-country");
  const list1 = document.querySelector(".list-country");

  const listItems = document.querySelectorAll(".list-country .list-group-item");

  btnCountry.addEventListener("click", function (event) {
    hide();
    list1.classList.toggle("d-none");
    event.stopPropagation(); // Ngăn chặn sự kiện click lan ra các phần tử khác
  });

  listItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      const value = this.textContent;
      btnCountry.innerHTML = value;
      list1.classList.add("d-none");
      event.stopPropagation();
    });
  });
}

function money() {
  const list2 = document.querySelector(".list-money");
  const btnMoney = document.querySelector(".btn-money");
  const listItems = document.querySelectorAll(".list-money .list-group-item");

  btnMoney.addEventListener("click", function (event) {
    hide();
    list2.classList.toggle("d-none");
    event.stopPropagation();
  });

  listItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      const value = this.textContent;
      btnMoney.innerHTML = value;
      list2.classList.add("d-none");
      event.stopPropagation();
    });
  });
}

function language() {
  const list3 = document.querySelector(".list-language");
  const btnLanguage = document.querySelector(".btn-language");
  const listItems = document.querySelectorAll(
    ".list-language .list-group-item"
  );

  btnLanguage.addEventListener("click", function (event) {
    hide();
    list3.classList.toggle("d-none");
    event.stopPropagation();
  });

  listItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      const value = this.textContent;
      btnLanguage.innerHTML = value;
      list3.classList.add("d-none");
      event.stopPropagation();
    });
  });
}
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
          <div class="content-item text-base text-18">Days</div>
      </div>
      <div class="item-category-market d-inline-block ml-3">
          <div class="hours date">${hours}</div>
          <div class="content-item text-base text-18">Hour</div>
      </div>
      <div class="item-category-market d-inline-block ml-3">
          <div class="minutes date">${minutes}</div>
          <div class="content-item text-base text-18">Minutes</div>
      </div>
      <div class="item-category-market d-inline-block ml-3">
          <div class="seconds date">${seconds}</div>
          <div class="content-item text-base text-18">Seconds</div>
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
});

function navCate() {
  const menuCategories = document.querySelector(".menu-categories");
  const dropdownCategories = document.querySelector(".dropdown-categories");

  menuCategories.addEventListener("click", () => {
    dropdownCategories.classList.toggle("d-block");
  });

  document.addEventListener("click", (event) => {
    if (!menuCategories.contains(event.target)) {
      dropdownCategories.classList.remove("d-block");
    }
  });
}
