import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // 完了ボタンイベント
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 戻るボタン
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  // 戻るボタンイベント
  backButton.addEventListener("click", () => {

    const deleteTarget = backButton.parentNode;
    document.getElementById("complete-list").removeChild(deleteTarget);

    const text = backButton.parentNode.firstElementChild.innerText;
    createIncompleteList(text);
  });
 
  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // 削除ボタンイベント
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // テキスト作られた時divに追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());