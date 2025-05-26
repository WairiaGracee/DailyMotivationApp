
const quote = document.getElementById('quote')
const newquoteBtn = document.getElementById('new-quote')
let currentQuote = ''            // holds the latest quote text
let favoriteQuotes = []          // array to store favorites

newquoteBtn.addEventListener('click', function(){
    quote.textContent = 'Loading...'

    fetch('https://dummyjson.com/quotes/random')
        .then(res => res.json())
        .then(data => {
            currentQuote = data.quote
            quote.textContent = `"${currentQuote}" — ${data.author}`
        })
        .catch(err => {
            quote.textContent = 'Failed to fetch quote.'
            console.error(err)
        })
})

const favquoteBtn = document.getElementById('save-quote')
const favList = document.getElementById('favorites-list')
favquoteBtn.addEventListener('click', function(){

    if (currentQuote && !favoriteQuotes.includes(currentQuote)) {
        favoriteQuotes.push(currentQuote) 

        const li = document.createElement('li')
        li.textContent = currentQuote
        favList.appendChild(li)
    }
})

