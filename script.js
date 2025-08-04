
window.onload = function () {
  document.getElementById("download").addEventListener("click", function () {
    const card = document.getElementById("card");
    html2pdf().from(card).save("romjan_id_card.pdf");
  });
};
