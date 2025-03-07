const removeClick = (event) => {
  event.currentTarget.parentNode.parentNode.remove();
};

const addClick = () => {
  const dateInput = document.getElementById("add_date").value;
  const textInput = document.getElementById("add_text").value;

  if (dateInput === "") {
    alert("日付が設定されていません");
    return;
  }

  if (textInput === "") {
    alert("予定が設定されていません");
    return;
  }

  const newRow = document.createElement("tr");
  const dateTd = document.createElement("td");
  const contentTd = document.createElement("td");
  const removeTd = document.createElement("td");

  const removeButton = document.createElement("input");
  removeButton.type = "button";
  removeButton.value = "remove";
  removeButton.onclick = removeClick;

  dateTd.innerText = dateInput;
  contentTd.innerText = textInput;
  removeTd.appendChild(removeButton);

  newRow.appendChild(dateTd);
  newRow.appendChild(contentTd);
  newRow.appendChild(removeTd);

  document.getElementById("table_body").appendChild(newRow);
};

const login = () => {
  const username = document.getElementById("username").value; // 修正
  const password = document.getElementById("password").value;

  const validUser = "test";
  const validPass = "1234";

  if (username === validUser && password === validPass) {
    localStorage.setItem("loggedIn", "true");
    document.getElementById("login_form").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    alert("ユーザー名またはパスワードが違います");
  }
};

const logout = () => {
  localStorage.removeItem("loggedIn");
  document.getElementById("login_form").style.display = "block";
  document.getElementById("app").style.display = "none";
};

//ここから
document.addEventListener("DOMContentLoaded", () => {
  checkLogin(); // ✅ ページ読み込み時にログイン状態をチェック

  document.getElementById("add_button").addEventListener("click", addClick);

  const loginButton = document.querySelector('input[value="ログイン"]');
  if (loginButton) {
    loginButton.addEventListener("click", login);
  }

  const logoutButton = document.querySelector('input[value="ログアウト"]');
  if (logoutButton) {
    logoutButton.addEventListener("click", logout);
  }
});

// ✅ ログイン状態をチェックして表示を切り替える
const checkLogin = () => {
  if (localStorage.getItem("loggedIn") === "true") {
    document.getElementById("login_form").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    document.getElementById("login_form").style.display = "block";
    document.getElementById("app").style.display = "none";
  }
};
