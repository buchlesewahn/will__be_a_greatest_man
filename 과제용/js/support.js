console.log("과제용 HTML 문서가 로드되었습니다.");
document.addEventListener("DOMContentLoaded", function () {
  console.log("문서가 완전히 로드되었습니다.");
});
function showAlert() {
  alert("과제용 HTML 문서입니다.");
}
function changeBackgroundColor() {
  document.body.style.backgroundColor = "lightblue";
  console.log("배경색이 변경되었습니다.");
}
function logMessage() {
  console.log("이것은 콘솔 메시지입니다.");
  alert("콘솔에 메시지가 기록되었습니다.");
}
function toggleVisibility() {
  const element = document.getElementById("toggleElement");
  if (element.style.display === "none") {
    element.style.display = "block";
    console.log("요소가 표시되었습니다.");
  } else {
    element.style.display = "none";
    console.log("요소가 숨겨졌습니다.");
  }
}
function changeText() {
  const element = document.getElementById("textElement");
  element.textContent = "텍스트가 변경되었습니다!";
  console.log("텍스트가 변경되었습니다.");
}
function addListItem() {
  const list = document.getElementById("itemList");
  const newItem = document.createElement("li");
  newItem.textContent = "새로운 리스트 아이템";
  list.appendChild(newItem);
  console.log("새로운 리스트 아이템이 추가되었습니다.");
}
function removeListItem() {
  const list = document.getElementById("itemList");
  if (list.lastChild) {
    list.removeChild(list.lastChild);
    console.log("마지막 리스트 아이템이 제거되었습니다.");
  } else {
    console.log("리스트에 아이템이 없습니다.");
  }
}
function changeImage() {
  const image = document.getElementById("imageElement");
  image.src = "https://via.placeholder.com/150";
  console.log("이미지가 변경되었습니다.");
}
function resetImage() {
  const image = document.getElementById("imageElement");
  image.src = "https://via.placeholder.com/100";
  console.log("이미지가 초기화되었습니다.");
}