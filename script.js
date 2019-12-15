const evilButton = document.getElementById("evil-button")
const offset = 100

evilButton.addEventListener("click", () => {
    alert("Nice Try")
    window.close()
})

document.addEventListener("mousemove", (event) => {
    const x = event.pageX
    const y = event.pageY
    const buttonBox = evilButton.getBoundingClientRect()
    const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
    const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)
    const horizontalOffset = buttonBox.width / 2 + offset
    const verticalOffset = buttonBox.height / 2 + offset
    if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
        setButtonPosition(
            buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10,
            buttonBox.y + verticalOffset / verticalDistanceFrom * 10
        )
    }
})
function setButtonPosition(left, top) {
    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = document.body.getBoundingClientRect()

    if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0){
        left = windowBox.right - buttonBox.width - offset
    }
    evilButton.style.left = `${left}px`
    evilButton.style.top = `${top}px`
    console.log(x,y)
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2
}