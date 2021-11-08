// TODO: Declare any global variables we need
let heads = 0
let tails = 0
let percentageHeads = 0
let percentageTails = 0
let totalFlips = heads + tails
const tailImage = 'assets/images/penny-tails.jpg'
const headsImage = 'assets/images/penny-heads.jpg'
const img = document.querySelector("img") 

document.addEventListener('DOMContentLoaded', function () {

    

    let button = document.querySelector('#flip')
    button.addEventListener('click', function(){
        
        let coinHeads = Math.random() < 0.5
        totalFlips++


        if (coinHeads){
            heads++
        
            document.getElementById('message').textContent = 'You Flipped Heads'
            img.src = headsImage
            document.getElementById('heads').textContent = heads

        }else{
            tails++
            document.getElementById('message').textContent = 'You Flipped Tails' 
            img.src = tailImage
            document.getElementById('tails').textContent = tails
            
        }

        percentageHeads = Math.round(heads/totalFlips*100)
        percentageTails = Math.round(tails/totalFlips*100)
        document.getElementById('heads-percent').textContent = percentageHeads
        document.getElementById('tails-percent').textContent = percentageTails

    })

    let clear = document.querySelector('#clear')
    clear.addEventListener('click', function(){
        document.getElementById('message').textContent = "Let's Get Rolling!"
      
    })

  


})