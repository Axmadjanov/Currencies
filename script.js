// const ninja = ["lee", "john", "sam"];
// console.log(ninja[0]);
// window.addEventListener("load", function () {
//     .querySelector('input[type="file"]')
//     .addEventListener("change", function () {
//       if (this.files && this.files[0]) {
//         img.onload = () => {
//           URL.revokeObjectURL(img.src); // no longer needed, free memory
//         };

//         img.src = URL.createObjectURL(this.files[0]); // set src to blob url
//       }
//     });
// });

// -----API

// function demo() {
//   console.log("demo:ichida");
// }

// demo();

// setTimeout(demo, 5000);
// console.log("demo:tashqaridaa");
const container = document.querySelector(".container");

fetch("https://core.unired.uz/api/open/rate")
  .then(function (res) {
    console.log(res);
    return res.json(); //pending,fulfilled,rejected
  })
  .then((data) => {
    const markup = `
    <table>
      <thead>
        <tr>
          <th>Valyutalar</th>
          <th>Bank</th>
          <th>Kuchada</th>
          <th>Qora Bozorda</th>
        </tr>
      </thead>
      <tbody >
      <tr>
      <td>Dollar </td>
      <td>${data.result[0].rate.cb}</td>
      <td>${data.result[0].rate.sell}</td>
      <td>${data.result[0].rate.buy}</td>
    </tr>
    <tr>
      <td>Evro</td>
      <td>${data.result[1].rate.cb}</td>
      <td>${data.result[1].rate.buy}</td>
      <td>${data.result[1].rate.sell}</td>
    </tr>
    <tr>
    <td>Funt</td>
      <td>${data.result[2].rate.cb}</td>
      <td>${data.result[2].rate.buy}</td>
      <td>${data.result[2].rate.sell}</td>
    </tr>
    <tr>
      <td>Frank</td>
      <td>${data.result[3].rate.cb}</td>
      <td>${data.result[3].rate.buy}</td>
      <td>${data.result[3].rate.sell}</td>
    </tr>
    <tr>
      <td>Yena</td>
      <td>${data.result[4].rate.cb}</td>
      <td>${data.result[4].rate.buy}</td>
      <td>${data.result[4].rate.sell}</td>
    </tr>
    <tr>
      <td>Rubl</td>
      <td>${data.result[5].rate.cb}</td>
      <td>${data.result[5].rate.buy}</td>
      <td>${data.result[5].rate.sell}</td>
    </tr>
</tbody>
    </table>
    `;
    container.innerHTML = markup;

    // console.log(data.result[0].rate);
  });
