const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

function onAdd() {
  // 입력한 테스트 받기
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  // 새 아이템 생성(텍스트+삭제버튼)
  const item = createItem(text);
  //   items 컨테이너 안에 새로 만든 아이템 추가
  items.appendChild(item);
  // 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({ block: "center" });
  // 인풋 초기화
  input.value = "";
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const span = document.createElement("span");
  span.setAttribute("class", "item__name");
  span.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item__delete");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item__divider");

  item.appendChild(span);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    onAdd();
  }
});

input.focus();
