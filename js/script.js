/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
    {
        quote: 'The fact of evolution is the backbone of biology, and biology is thus in the peculiar position of being a science founded on an improved theory, is it then a science or faith?',
        source: 'Charles Darwin',
        citation: 'https://www.quotedb.com/categories/science',
        year: 1900
    },
    {
        quote: 'Information is not knowledge, and knowledge is not wisdom. Reading - even browsing - an old book can yield sustenance denied by a database search. Patience is a virtue, gluttony a sin.',
        source: 'James Gleick',
        citation: 'https://www.brainyquote.com/quotes/james_gleick_691757?src=t_database',
        year: 1954
    },
    {
        quote: '\'YouKu\' means what\'s best and what\'s cool in Chinese. So, the whole product philosophy really revolves around how to help users, from a massive video database, finds what\'s best and what\'s cool.',
        source: 'Victor Koo',
        citation: 'https://www.brainyquote.com/quotes/victor_koo_692801?src=t_database',
        year: null
    },
    {
        quote: 'In order to protect the market value of a proprietary database, the owner must prohibit redistribution of the contents - otherwise, the information would quickly leak out and be widely known.',
        source: 'John Sulston',
        citation: 'https://www.brainyquote.com/quotes/john_sulston_734404?src=t_database',
        year: 2018
    },
    {
        quote: 'Why did Google, for example, recently decide to offer free 411 service? I haven\'t talked to people at Google, but it\'s pretty clear to me why. It\'s because of speech recognition. It has nothing to do with 411 service: it has to do with getting a database of voices, so they don\'t have to license speech technology from Nuance or someone else.',
        source: 'Tim O\'Reilly',
        citation: '',
        year: 1954
    },
    {
        quote: 'Well, again, a gun sale database is just trying to get the Department of Justice to keep track of the guns that they\'re purchasing and supplying to drug dealers and murderers. I mean, wow. Come on, let\'s get the government under control before we start restricting the rights of - innocent citizens.',
        source: 'John Mica',
        citation: 'https://www.brainyquote.com/quotes/john_mica_447939?src=t_database',
        year: 1943
    },
    {
        quote: 'There is no central government database that allows officials to monitor water tests by local systems.',
        source: 'Charles Duhigg',
        citation: 'https://www.brainyquote.com/quotes/charles_duhigg_663428?src=t_database',
        year: 1974
    },
    {
        quote: 'The best thing to do is always keep randomly generated passwords everywhere and use a password tool to manage it, and then you don\'t have to remember those passwords at all, just the master password that unlocks the database.',
        source: 'Kevin Mitnick',
        citation: 'https://www.brainyquote.com/quotes/kevin_mitnick_613271?src=t_database',
        year: 1963
    },
    {
        quote: 'Most developer tools try to shield you from actually writing code in constructing the GUI bits or the database bits. Yet when you do write code you usually get glass teletypes where high tech is keyword coloring.',
        source: 'James Gosling',
        citation: 'https://www.brainyquote.com/quotes/james_gosling_1050697?src=t_database',
        year: 1955
    },
    {
        quote: 'I started a crowdfunding campaign on Sci-Hub to buy additional drives, and soon had my own copy of the database collected by LibGen, around 21 million papers.',
        source: 'Alexandra Elbakyan',
        citation: 'https://www.brainyquote.com/quotes/alexandra_elbakyan_1099052?src=t_database',
        year: 1988
    },
    {
        quote: '',
        source: 'Alexandra Elbakyan',
        citation: 'https://www.brainyquote.com/quotes/alexandra_elbakyan_1099052?src=t_database',
        year: 1988
    },
]

/***
 * `getRandomColor` function
***/

// https://stackoverflow.com/questions/20790579/wont-math-floormath-random-255-generate-uneven-probabilities
function getRandomRGB() {
    return Math.floor(Math.random() * 256);
}

function getRandomColor() {
    let rgbList = []
    for (let i=0; i<3; i++) {
        let color = getRandomRGB()
        rgbList.push(color)
    }
    let cssColor = rgbList.join(', ')
    return `rgb(${cssColor})`
}

/***
 * `getRandomQuote` function
***/

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomQuote(arr) {
    quotePosition = getRandomNumber(0, quotes.length)
    console.log(quotePosition)
    return quotes[quotePosition]   // The function returns quote integer (index in the array)
}

/***
 * `printQuote` function
***/

function parseHTML(obj) {
    let html = ''
    let quoteList = Object.entries(obj);
    if (quoteList[0][1] !== '') {
        html += `<p class="quote">${quoteList[0][1]}</p>`
        if (quoteList[1][1] !== '') {
            html += `<p class="source">${quoteList[1][1]}`
            if (quoteList[2][1] !== '') {
                html  += `<span class="citation">${quoteList[2][1]}</span>`
            }
            if (quoteList[3][1] !== null) {
                html += `<span class="year">${quoteList[3][1]}</span></p>`
            } else {
                html += `</p>`
            }
        } else {
            html = "Your database include a quote but missing an author."
        }
    } else {
        html = "Your database of quotes includes an empty quote"
    }
    return html
}

let printQuote = (function printQuote() {
    let color = getRandomColor()
    let quote = getRandomQuote(quotes)
    let finalHTML = parseHTML(quote)
    document.body.style.backgroundColor = color;
    document.getElementById('quote-box').innerHTML = finalHTML;
})

setInterval(printQuote, 3000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);