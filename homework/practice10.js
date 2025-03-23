class Player {
    constructor(nickName, score) {
       
        this.nickName = nickName;
        this.score = score;
    }

    getInfo() {
        return `${this.nickName}'s score is ${this.score}`;
    }

    
    attack(otherPlayer) {
        if (otherPlayer instanceof Player) {
            this.score += 1;      
            otherPlayer.score -= 1; 
        }
    }

  
    damage() {
        this.score -= 1;
    }
}


const player1 = new Player("PlayerOne", 10);
const player2 = new Player("PlayerTwo", 8);

console.log(player1.getInfo());  
console.log(player2.getInfo());  

player1.attack(player2);  
console.log(player1.getInfo());  
console.log(player2.getInfo());  

player1.damage(); 
console.log(player1.getInfo());