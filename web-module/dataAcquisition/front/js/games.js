function main() {
  formSelect.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch("http://localhost:8000/api/game", {
      method: "GET",
    });

    if (response.ok) {
      let results = await response.json();

      const headers = Object.keys(results[0]);
      const values = Object.values(results);

      let table = document.createElement("table");

      let tr = table.insertRow(-1);

      for (const header of headers) {
        let th = document.createElement("th");
        th.innerHTML = header;
        tr.appendChild(th);
      }

      for (const row of values) {
        let tr = table.insertRow(-1);

        for (const key of Object.keys(row)) {
          let tabCell = tr.insertCell(-1);
          tabCell.innerHTML = row[key];
        }
      }

      const container = document.getElementById("getResults");
      container.innerHTML = "";
      container.appendChild(table);
    } else {
      getResults.innerHTML = response.status;
    }
  };

  formInsert.onsubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(formInsert);
    const dataObj = Object.fromEntries(data.entries());

    let response = await fetch("http://localhost:8000/api/game", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataObj),
    });

    if (response.ok) {
      let results = await response.json();
      postResults.innerHTML = results.msg;
    } else {
      postResults.innerHTML = response.status;
    }
  };

  formUpdate.onsubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(formUpdate);
    const dataObj = Object.fromEntries(data.entries());
    checkIfEmpty(dataObj);

    let game = document.getElementById("curGameId");
    let game_id = game.value;

    let response = await fetch(`http://localhost:8000/api/game/${game_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataObj),
    });

    if (response.ok) {
      let results = await response.json();
      putResults.innerHTML = results.msg;
    } else {
      putResults.innerHTML = response.status;
    }
  };

  function checkIfEmpty(dataObj) {
    for (const item in dataObj) {
      if (dataObj[item] == "") {
        delete dataObj[item];
      }
    }
  }

  formDelete.onsubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(formDelete);
    const dataObj = Object.fromEntries(data.entries());

    let game = document.getElementById("curGameIdDel");
    let game_id = game.value;

    let response = await fetch(`http://localhost:8000/api/game/${game_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataObj),
    });

    if (response.ok) {
      let results = await response.json();
      deleteResults.innerHTML = results.msg;
    } else {
      deleteResults.innerHTML = response.status;
    }
  };
}

main();
