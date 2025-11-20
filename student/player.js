// const area = document.getElementById("playerArea");

// const id = new URLSearchParams(window.location.search).get("id");
// const list = JSON.parse(localStorage.getItem("wsList") || "[]");
// const ws = list.find(w => w.id == id);

// if (!ws) {
//   area.innerHTML = "<p>Worksheet not found.</p>";
// }

// area.innerHTML = `<h2>${ws.title}</h2><p>${ws.desc}</p><hr>`;

// // Render components
// ws.content.forEach(block => {
//   switch(block.type) {

//     case "title":
//       area.innerHTML += `<h3>${block.text}</h3>`;
//       break;

//     case "text":
//       area.innerHTML += `
//         <p>${block.question}</p>
//         <input class="input-text"><br><br>
//       `;
//       break;

//     case "blank":
//       area.innerHTML += `
//         <p>${block.question}</p>
//         <input class="input-text"><br><br>
//       `;
//       break;

//     case "number":
//       area.innerHTML += `
//         <p>${block.question}</p>
//         <input type="number" class="input-number"><br><br>
//       `;
//       break;

//     case "truefalse":
//       area.innerHTML += `
//         <p>${block.question}</p>
//         <select>
//           <option>True</option>
//           <option>False</option>
//         </select><br><br>
//       `;
//       break;

//     case "mcq":
//       let html = `<p>${block.question}</p>`;
//       block.options.forEach(opt => {
//         html += `<label><input type="radio" name="${block.question}"> ${opt}</label><br>`;
//       });
//       html += "<br>";
//       area.innerHTML += html;
//       break;

//   }
// });
