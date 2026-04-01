document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll('form[action*="formsubmit.co"]');

  if (!forms.length) {
    return;
  }

  const thankYouUrl = new URL("danke.html", window.location.href).toString();

  forms.forEach(function (form) {
    let nextInput = form.querySelector('input[name="_next"]');

    if (!nextInput) {
      nextInput = document.createElement("input");
      nextInput.type = "hidden";
      nextInput.name = "_next";
      form.appendChild(nextInput);
    }

    nextInput.value = thankYouUrl;
  });
});
