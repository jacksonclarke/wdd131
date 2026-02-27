let character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    sourceImg: "snortleblat.webp",
    level: 5,
    health: 100,
    attacked: function(){
        if (this.health < 20) {
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
document.querySelector(".stats");


