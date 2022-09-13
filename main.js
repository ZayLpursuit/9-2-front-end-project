//players
fetch ("https://www.balldontlie.io/api/v1/players")
    .then(response=>response.json())
    .then(response=>console.log(response))
//teams
fetch("https://www.balldontlie.io/api/v1/teams")
    .then(response=>response.json())
    .then(response=>console.log(response))
//individual player
fetch("https://www.balldontlie.io/api/v1/players/<ID>")
    .then(response=>response.json())
    .then(response=>console.log(response))
//individual team
fetch("https://www.balldontlie.io/api/v1/teams/<ID>")
    .then(response=>response.json())
    .then(response=>console.log(response))
//stats
fetch("https://www.balldontlie.io/api/v1/stats")
    .then(response=>response.json())
    .then(response=>console.log(response))
//season averages
fetch("https://www.balldontlie.io/api/v1/season_averages")
    .then(response=>response.json())
    .then(response=>console.log(response))
