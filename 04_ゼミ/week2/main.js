const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = function () {
  const memoInput = document.getElementById("memo-input").value
  console.log(memoInput)
  const memo = document.createElement("div")
  memo.textContent = memoInput
  memoContainer.append(memoInput)
  console.log(memoContainer)
}
