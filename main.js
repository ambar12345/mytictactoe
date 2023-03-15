//listen for clicks
//check if square is filled or not
//if empty, fill in = show move
//-->not empty: do nothing
//-->empty: check if winning combo
//-->not a winner: switch user
//-->winner: announce winner, accept no more clicks

class Board {
   constructor(space){
       this._space = space
       this._user = 'X'
       this._moves = [0,1,2,3,4,5,6,7,8]
   }
   get space() {
       return this._space
   }

   get user() {
       return this._user
   }

   set space(chosen) {
       this._space = chosen
   }


   get moves(){
       return this._moves
   }

   
   checkMove() {
    console.log("check move")
    let index = (this._space[5]-1)
   if (this._moves[index] != 'X' && this._moves[index]!='O'){
    this._moves.splice(index,1,this._user)
    click.showMove()
   }else{
       console.log('space taken')
   }
    } 

   showMove() {
       console.log("show move")
       document.getElementById(this._space).innerHTML = this._user 
       console.log(`MOVES ARRAY: ${this.moves}`)
       this.checkWin()
   }

   checkWin(){
    console.log('checking win')
       let count = this._moves.filter(char => char == this._user).length
       console.log(`count = ${count}`)
       if (count >= 3){
        if (this._moves[0] == this._moves[1] && this._moves[1]==this._moves[2] 
            || this._moves[3] == this._moves[4] && this._moves[4]==this._moves[5] 
            || this._moves[6] == this._moves[7] && this._moves[7]==this._moves[8]
            || this._moves[0] == this._moves[3] && this._moves[3]==this._moves[6]
            || this._moves[1] == this._moves[4] && this._moves[4]==this._moves[7]
            || this._moves[2] == this._moves[5] && this._moves[5]==this._moves[8]
            || this._moves[0] == this._moves[4] && this._moves[4]==this._moves[8]
            || this._moves[2] == this._moves[4] && this._moves[4]==this._moves[6]){
                console.log('go to winner function')
                this.winner()
            }
            else {
                this.switchUser()
            }
       }
        else{
        this.switchUser()
        }
   }
   switchUser(){
       console.log('switching user!')
       this._user == 'X'? this._user = 'O' : this._user = 'X'
   }
   winner(){
    console.log('we have a winner')
    document.querySelector('h4').innerText = `${this._user} WINS!`
    document.querySelector('body').classList.add('winner')
    document.querySelector('body').classList.add('noClick')

   }
}

let click = new Board()

clickedBoardyo = (event) => {
    console.log('clicked something')
    click.space = event.target.id
    console.log(`click.space = ${click.space}`)
    click.checkMove()
 }



document.getElementById('board').addEventListener('click',clickedBoardyo)


// document.getElementById('board').addEventListener('click',check)
// document.querySelector('h4').addEventListener('click', reset)

// let space1 = document.getElementById('space1')
// let space2 = document.getElementById('space2')
// let space3 = document.getElementById('space3')
// let space4 = document.getElementById('space4')
// let space5 = document.getElementById('space5')
// let space6 = document.getElementById('space6')
// let space7 = document.getElementById('space7')
// let space8 = document.getElementById('space8')
// let space9 = document.getElementById('space9')
// let spaces = [space1, space2, space3, space4, 
//     space5, space6, space7, space8, space9]
// let chosen = ''
// let user = 'X'

// function check(event) {
//    // alert('Check')
//     console.log(event.target.id)
//     chosen = event.target.id
//     console.log(document.getElementById(chosen).innerHTML)
//     if (document.getElementById(chosen).innerHTML == false){
//     fill()}
//     else {
//         console.log('already filled')
//     }
// }



// function fill() {
//     document.getElementById(chosen).innerHTML = user 
//     console.log(`innerHTML = ${chosen.innerHTML}`)
//     checkWin() 
// }

// function checkWin(){
//     if (space1.innerHTML == user && space2.innerHTML == user && space3.innerHTML == user //3 first row
//        || space4.innerHTML == user && space5.innerHTML== user && space6.innerHTML == user //3 second row
//        || space7.innerHTML == user  && space8.innerHTML == user && space9.innerHTML == user// 3 third row
//        || space1.innerHTML == user && space4.innerHTML == user && space7.innerHTML == user //3 first column
//        || space2.innerHTML == user && space5.innerHTML == user && space8.innerHTML == user //3 second column
//        || space3.innerHTML == user && space6.innerHTML == user && space9.innerHTML == user //3 third column
//        || space1.innerHTML == user && space5.innerHTML == user && space9.innerHTML == user //3 diagonal going right
//        || space3.innerHTML == user && space5.innerHTML == user && space7.innerHTML == user //3 diagonal going left
//        ){
//             console.log('checking')
//         win()
//     }
//     else {
//         user == 'X'? user = 'O' : user = 'X'
//     }
// }


// function win(){
//     alert(`${user} wins!!!`)
//     spaces.forEach(space => space.classList.add('noClick'))
//     document.querySelector('h4').innerText = "Play Again!"
// }

// function reset() {
//     console.log('you clicked play again')
//     spaces.forEach( (space) => { 
//         space.innerHTML = ''
//         space.classList.remove('noClick')
//     })
// }

