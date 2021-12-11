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
const input = document.getElementById("input");

fetch("https://core.unired.uz/api/open/rate")
  .then(function (res) {
    console.log(res);
    return res.json(); //pending,fulfilled,rejected
  })
  .then((data) => {
    input.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        if (
          input.value === "USD" ||
          input.value === "Dollar" ||
          input.value === "dollar" ||
          input.value === "Usd" ||
          input.value === "usd"
        ) {
          const show = `
          <table>
            <thead>
              <tr>
                <th>Valyutalar</th>
                <th>Bank</th>
                <th>Kuchada</th>
                <th>Qora Bozorda</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>USD </td>
                <td>${data.result[0].rate.cb}</td>
                <td>${data.result[0].rate.sell}</td>
                <td>${data.result[0].rate.buy}</td>
              </tr>
            </tbody>
          </table>
          `;
          console.log("hi");
          container.innerHTML = show;
          input.value = "";
        } else if (
          input.value === "EUR" ||
          input.value === "eur" ||
          input.value === "Eur" 
         
          
        ) {
          const show1 = `
          <table>
            <thead>
              <tr>
                <th>Valyutalar</th>
                <th>Bank</th>
                <th>Kuchada</th>
                <th>Qora Bozorda</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>EUR </td>
                <td>${data.result[1].rate.cb}</td>
                <td>${data.result[1].rate.sell}</td>
                <td>${data.result[1].rate.buy}</td>
              </tr>
            </tbody>
          </table>
          `;
          console.log("hi");
          container.innerHTML = show1;
          input.value = "";
        } else if (
          input.value === "funt" ||
          input.value === "Funt" ||
          input.value === "GBP" ||
          input.value === "Gbp" ||
          input.value === "gbp"
        ) {
          const show1 = `
          <table>
            <thead>
              <tr>
                <th>Valyutalar</th>
                <th>Bank</th>
                <th>Kuchada</th>
                <th>Qora Bozorda</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Funt </td>
                <td>${data.result[2].rate.cb}</td>
                <td>${data.result[2].rate.sell}</td>
                <td>${data.result[2].rate.buy}</td>
              </tr>
            </tbody>
          </table>
          `;
          console.log("hi");
          container.innerHTML = show1;
          input.value = "";
        } else if (input.value === "CHF" || input.value === "chf"||input.value === "Gbp") {
          const show1 = `
          <table>
            <thead>
              <tr>
                <th>Valyutalar</th>
                <th>Bank</th>
                <th>Kuchada</th>
                <th>Qora Bozorda</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CHF</td>
                <td>${data.result[3].rate.cb}</td>
                <td>${data.result[3].rate.sell}</td>
                <td>${data.result[3].rate.buy}</td>
              </tr>
            </tbody>
          </table>
          `;
          console.log("hi");
          container.innerHTML = show1;
          input.value = "";
        } else if (input.value === "jyp" || input.value === "JPY"||input.value === "Jyp") {
          const show1 = `
          <table>
            <thead>
              <tr>
                <th>Valyutalar</th>
                <th>Bank</th>
                <th>Kuchada</th>
                <th>Qora Bozorda</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>JPY</td>
                <td>${data.result[4].rate.cb}</td>
                <td>${data.result[4].rate.sell}</td>
                <td>${data.result[4].rate.buy}</td>
              </tr>
            </tbody>
          </table>
          `;
          console.log("hi");
          container.innerHTML = show1;
          input.value = "";
        } else if (input.value === "RUB" || input.value === "rub"||input.value === "Rub") {
          const show1 = `
          <table>
            <thead>
              <tr>
                <th>Valyutalar</th>
                <th>Bank</th>
                <th>Kuchada</th>
                <th>Qora Bozorda</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RUB</td>
                <td>${data.result[5].rate.cb}</td>
                <td>${data.result[5].rate.sell}</td>
                <td>${data.result[5].rate.buy}</td>
              </tr>
            </tbody>
          </table>
          `;
          console.log("hi");
          container.innerHTML = show1;
          input.value = "";
        }
      }
    });

    //     const markup = `
    //     <table>
    //       <thead>
    //         <tr>
    //           <th>Valyutalar</th>
    //           <th>Bank</th>
    //           <th>Kuchada</th>
    //           <th>Qora Bozorda</th>
    //         </tr>
    //       </thead>
    //   <tbody >
    //   <tr>
    //   <td>Dollar </td>
    //   <td>${data.result[0].rate.cb}</td>
    //   <td>${data.result[0].rate.sell}</td>
    //   <td>${data.result[0].rate.buy}</td>
    // </tr>
    //     <tr>
    //       <td>Evro</td>
    //       <td>${data.result[1].rate.cb}</td>
    //       <td>${data.result[1].rate.buy}</td>
    //       <td>${data.result[1].rate.sell}</td>
    //     </tr>
    //     <tr>
    //     <td>Funt</td>
    //       <td>${data.result[2].rate.cb}</td>
    //       <td>${data.result[2].rate.buy}</td>
    //       <td>${data.result[2].rate.sell}</td>
    //     </tr>
    //     <tr>
    //       <td>Frank</td>
    //       <td>${data.result[3].rate.cb}</td>
    //       <td>${data.result[3].rate.buy}</td>
    //       <td>${data.result[3].rate.sell}</td>
    //     </tr>
    //     <tr>
    //       <td>Yena</td>
    //       <td>${data.result[4].rate.cb}</td>
    //       <td>${data.result[4].rate.buy}</td>
    //       <td>${data.result[4].rate.sell}</td>
    //     </tr>
    //     <tr>
    //       <td>Rubl</td>
    //       <td>${data.result[5].rate.cb}</td>
    //       <td>${data.result[5].rate.buy}</td>
    //       <td>${data.result[5].rate.sell}</td>
    //     </tr>
    // </tbody>
    //     </table>
    //     `;
    // container.innerHTML = markup;
    console.log(data);

    // console.log(data.result[0].rate);
  });
