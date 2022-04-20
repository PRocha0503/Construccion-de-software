function main() {
  formSelect.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch("http://localhost:8000/api/user", {
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

    let response = await fetch("http://localhost:8000/api/user", {
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

    let user = document.getElementById("curusername");
    let username = user.value;

    let response = await fetch(`http://localhost:8000/api/user/${username}`, {
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
        console.log(dataObj[item]);
        delete dataObj[item];
      }
    }
  }

  formDelete.onsubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(formDelete);
    const dataObj = Object.fromEntries(data.entries());

    let response = await fetch("http://localhost:5000/api/users", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataObj),
    });

    if (response.ok) {
      let results = await response.json();

      console.log(results);
      deleteResults.innerHTML = results.message;
    } else {
      deleteResults.innerHTML = response.status;
    }
  };
}

main();
