
document.querySelector(".select__btn").addEventListener("click", function (evt) {
   evt.stopPropagation();
   document.querySelector(".select__values").classList.toggle("select__values_visible");
   document.querySelector(".select__btn").classList.add("select__btn_active");
   document.querySelector(".select__arrow").classList.toggle("select__arrow_active");
})

document.querySelectorAll(".select__value").forEach(function (selectValue) {
   selectValue.addEventListener("click", function () {
      document.querySelector(".select__btn").textContent = selectValue.textContent;
      document.querySelector(".select__btn").focus();
      document.querySelector(".select__input").value = selectValue.dataset.value;
      document.querySelector(".select__arrow").classList.remove("select__arrow_active");
   })
})

document.addEventListener("click", function () {
   document.querySelector(".select__values").classList.remove("select__values_visible");
   document.querySelector(".select__btn").classList.remove("select__btn_active");
   document.querySelector(".select__arrow").classList.remove("select__arrow_active");
})

document.querySelector(".select__btn").addEventListener("keydown", function (evt) {
   if (evt.key === "Escape" || evt.key === "Tab") {
      document.querySelector(".select__values").classList.remove("select__values_visible");
      document.querySelector(".select__btn").classList.remove("select__btn_active");
      document.querySelector(".select__arrow").classList.remove("select__arrow_active");
   }
})