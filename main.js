const logoLetters = document.querySelectorAll("#js-logo path")

for (let i = 0; i < logoLetters.length; i++) {
    const lineLength = logoLetters[i].getTotalLength()
    logoLetters[i].style.strokeDasharray = lineLength;
    logoLetters[i].style.strokeDashoffset = lineLength;
}