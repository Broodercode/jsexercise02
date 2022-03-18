
//tweets variable, added objects.  Was not sure wht age was about so I assumed it was the time stamp.  I also endorse none of these tweets, twitter is toxic garbage lol.
var tweets = [
    {
        tweet: "MOAR WORLDS COLLIDE PRACTICE TONIGHT! Looking to go live around 6 for another practice run. Be there to get your name in the seed!",
        username: 'RetrophileTV',
        created_at: '03-18-2022',
        age: 1
    },
    {
        tweet: "Well, SGDQ was announced as in-person, so it looks like I'll be missing my first on-site GDQ since 2012.  I understand that they must be under pressure by hotels (and fans) to do this, but it is absolutely not safe, especially with the new variant(s).",
        username: 'PJDiCesare',
        created_at: '03-18-2022',
        age: 1
    },
    {
        tweet: "Souls community shaming OP strats is like if the Mega Man community insisted on buster only all the time. Metal blade first? you're trash git gud. Ironically these 'hard', NES games are cited as having similar values, but I aint seen that level of gatekeeping",
        username: 'duckfist',
        created_at: '03-18-2022',
        age: 2
    },
    {
        tweet: "Twitch is teasing a sexy new 'mature' content policy that may enable a lot of 'after dark' content - albeit with new restrictions/enforcement on the Mature flag. ",
        username: 'Zach Bussey',
        created_at: '03-18-2022',
        age: 2
    },
    {
        tweet: "I Left USPS to work for Amazon and it’s been pretty great so far. 4 day work week (vs 6), no worries about maintaining an extra vehicle or gas, decent pay for the area, and I can just take off any day I need. Also they hand out awesome enamel pins. So yeah… more streams soon.",
        username: 'Polsvoice',
        created_at: '03-18-2022',
        age: 3
    },
    {
        tweet: "Does anybody actually like motion blur in video games?",
        username: 'Sarah',
        created_at: '03-18-2022',
        age: 3
    },
    {
        tweet: "To every Twitch viewer on earth, do not spoil or offer advice unless asked or if you ask permission to do so.",
        username: 'Shallelujah',
        created_at: '03-18-2022',
        age: 3
    },
    {
        tweet: "Visibly tired but I'll stay practicing! Thanks to everyone who stuck around and gave me some tips for the game! I need them! You guys rock 🤘🏻",
        username: 'Tine!',
        created_at: '03-18-2022',
        age: 4
    },
    {
        tweet: "What’s the next NFT project that will come out with a coin?",
        username: 'Crystal Hefner',
        created_at: '03-18-2022',
        age: 4
    },
    {
        tweet: "10 was way too many",
        username: 'BroodVX',
        created_at: '03-18-2022',
        age: 4
    },
]

var counter = 0

while(counter < tweets.length) {
    //I added a counter so we knew what tweet we were on
    console.log(`Tweet #${counter+1}`)
    //tweet
    console.log(tweets[counter].tweet)
    //data associated to tweet
    console.log(tweets[counter].username, tweets[counter].created_at, tweets[counter].age + 'h')
    counter++
}