let character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    sourceImg: "snortleblat.webp",
    level: 5,
    health: 100,
    attacked: function(){
        if (this.health < 20) {
            this.health = 0;
            alert("Character Died");
        } else {
            this.health -= 20
        }
    },
    levelUp: function(){
        this.level += 1
    }
}

document.querySelector("img").setAttribute("src", character.sourceImg);
document.querySelector("h2").textContent = character.name;
// make the stat names bold and each stat on a new line

document.querySelector("#stat").innerHTML = `<strong>Class:</strong> ${character.class}<br><strong>Level:</strong> ${character.level}<br><strong>Health:</strong> ${character.health}`;

// add event listeners to the buttons
document.querySelector("#attack").addEventListener("click", function(){
    character.attacked();
    document.querySelector("#stat").innerHTML = `<strong>Class:</strong> ${character.class}<br><strong>Level:</strong> ${character.level}<br><strong>Health:</strong> ${character.health}`;
});
document.querySelector("#levelUp").addEventListener("click", function(){
    character.levelUp();
    document.querySelector("#stat").innerHTML = `<strong>Class:</strong> ${character.class}<br><strong>Level:</strong> ${character.level}<br><strong>Health:</strong> ${character.health}`;
});
