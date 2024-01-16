import express from 'express'
const app = express()
app.get('/', (req, res) => {
        res.send('Server is  not ready')
    })
    //get a list of 5jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [{
            "type": "general",
            "setup": "What did the fish say when it hit the wall?",
            "punchline": "Dam."
        },
        {
            "type": "general",
            "setup": "How do you make a tissue dance?",
            "punchline": "You put a little boogie on it."
        },
        {
            "type": "general",
            "setup": "What's Forrest Gump's password?",
            "punchline": "1Forrest1"
        },
        {
            "type": "general",
            "setup": "What do you call a belt made out of watches?",
            "punchline": "A waist of time."
        },
        {
            "type": "general",
            "setup": "Why can't bicycles stand on their own?",
            "punchline": "They are two tired"
        },
    ]
    res.send(jokes)
})
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Serve at http://localhost:$(port)`)

})