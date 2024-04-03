/**
 *  RANGE SLIDER
 *  Include the following script before </body> tag
 *  <script src="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.2/js/ion.rangeSlider.min.js"></script>
 *
 *  Include the following scripts inside the <head> tag:
 *  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.2/css/ion.rangeSlider.min.css">
 *  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.2/css/ion.rangeSlider.skinFlat.min.css">
 **/
$("[custom-input='range'").each(function (el) {
    $(this).ionRangeSlider();
});

/**
 *  DATE PICKER
 *  Also include this:
 *  <script src="https://fengyuanchen.github.io/datepicker/js/datepicker.js"></script>
 **/
$(document).ready(function () {
    $('[data-input="datepicker"]').datepicker({
        format: "mm-dd-yyyy",
    });
});

/**
 *  PASSWORD FIELD
 */
//attach a click handler to the button to make it transform when clicked, via our transform() function below. Add right before your closing body tag.
document.querySelectorAll(".form-password").forEach((input) => {
    input.querySelectorAll("[data-control='toggle']").forEach((toggle) => {
        const inputField = input.querySelector(".form-input");
        toggle.querySelector("[data-toggle='off']").style.display = "none"; // hide toggle off by default
        toggle.addEventListener("click", (e) => transform(e, inputField));
    });
});
//this function will toggle the input between being a password or a text input
function transform(e, input) {
    const toggle = e.target.closest("[data-control='toggle']");
    const toggleOff = toggle.querySelector("[data-toggle='off']");
    const toggleOn = toggle.querySelector("[data-toggle='on']");

    if (input.type === "password") {
        input.type = "text";
        toggleOff.style.display = "block";
        toggleOn.style.display = "none";
    } else {
        input.type = "password";
        toggleOff.style.display = "none";
        toggleOn.style.display = "block";
    }
}
