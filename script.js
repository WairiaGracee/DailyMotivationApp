const quotes = [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Dream big and dare to fail. – Norman Vaughan",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Don't limit your challenges. Challenge your limits. – Jerry Dunn",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Do something today that your future self will thank you for.",
    "Don’t wait for opportunity. Create it.",
    "Sometimes later becomes never. Do it now.",
    "Little things make big days.",
    "It's going to be hard, but hard does not mean impossible.",
    "Don't quit. Suffer now and live the rest of your life as a champion. – Muhammad Ali",
    "Your limitation—it's only your imagination.",
    "Stay positive, work hard, make it happen."
];

const quote = document.getElementById('quote')

document.getElementById('new-quote').addEventListener('click', function(){
    quote.innerHTML = ''
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quote.innerHTML = `${randomQuote}`
    const currentQuote = quote.innerHTML

})

    const favoritesList = document.getElementById('favorites-list')
    document.getElementById('save-quote').addEventListener('click', function(){

    if(currentQuote){
        const li = document.createElement('li')
        li.innerHTML = `${currentQuote}`
        favoritesList.appendChild(li)
    }

})


