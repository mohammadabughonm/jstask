// const selectCountry = document.getElementById("cuntry");
// const cuntryFlag = document.getElementById("cuntry-flag");

// // Listen for changes to the selected country
// selectCountry.addEventListener("change", function() {
//   // Get the selected country option
//   const selectedOption = selectCountry.options[selectCountry.selectedIndex];

//   // Hide all flag images
//   const flagImages = cuntryFlag.querySelectorAll("img");
//   flagImages.forEach(function(img) {
//     img.style.display = "none";
//   });

//   // Show the corresponding flag image
//   const flagImageId = "img" + selectedOption.index;
//   const selectedFlagImage = document.getElementById(flagImageId);
//   selectedFlagImage.style.display = "block";
// });
const countrySelect = document.getElementById("cuntry");
const jordanImg = document.getElementById("jordan-img");
const qutarImg = document.getElementById("Qutar-img");
const ukrainaImg = document.getElementById("Ukraina-img");

countrySelect.addEventListener("change", function() {
    if (countrySelect.value === "jordan") {
        jordanImg.style.display = "inline";
        qutarImg.style.display = "none";
        ukrainaImg.style.display = "none";
    } else if (countrySelect.value === "Qutar") {
        jordanImg.style.display = "none";
        qutarImg.style.display = "inline";
        ukrainaImg.style.display = "none";
    } else if (countrySelect.value === "Ukraina") {
        jordanImg.style.display = "none";
        qutarImg.style.display = "none";
        ukrainaImg.style.display = "inline";
    } else {
        jordanImg.style.display = "none";
        qutarImg.style.display = "none";
        ukrainaImg.style.display = "none";
    }
});
