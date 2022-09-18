
let name
let sAvgStats

const homeButton=document.querySelector("#Home")
homeButton.addEventListener("click",(event)=>{
   location.reload()
})


const div=document.querySelector('div')
const teamsObj={}
fetch("https://www.balldontlie.io/api/v1/teams")
    .then(response=>response.json())
    .then(teams=>{
        for (let team of teams.data){
            
             teamsObj[team.name.toLowerCase()]=team
            
        }
    //    console.log(teamsObj)
    console.log(teamsObj["Bulls"])
    })
    
const images=document.querySelectorAll(".photo")
const teamDiv=document.querySelector(".teams")

const cells=document.querySelector(".cell")

const main=document.querySelector("main")
main.setAttribute("style","display:none")

let aside= document.createElement("aside")

const nName=document.createElement("p")
const abbrev=document.createElement("p")
const conf=document.createElement("p")
const city=document.createElement("p")
const fullTeamName=document.createElement("p")
const division=document.createElement("p")

for (let img of images){

    img.addEventListener("mouseover",(event)=>{
        img.setAttribute("style", "border:5px solid red; tranform:scale(1,1.5);box-sizing:border-box")
    })

    img.addEventListener("mouseleave",(event)=>{
        img.setAttribute("style", "border:none")
    })


img.addEventListener("click",(event)=>{
    console.log(teamsObj)
    aside.innerHTML=""
    const newImage=img.cloneNode()
    newImage.setAttribute("style","border:5px solid lightpink;align-self:center;margin:10px auto;")
    aside.prepend(newImage)


    const straightLine= document.createElement("hr")


    console.log(teamsObj[event.target.id])
    let tmp=teamsObj[event.target.id.toLowerCase()]
    nName.innerHTML=`<p class="label-color" ><strong>Name:</strong></p><span class="stat-value">${event.target.id.toUpperCase()}</span>`

    abbrev.innerHTML=`<p class="label-color" ><strong>Abbreviation:  </strong></p><span class="stat-value">${tmp.abbreviation}</span>`
    conf.innerHTML=`<p class="label-color" ><strong>Conference:</strong></p> <span class="stat-value">  ${tmp.conference}</span>`
    city.innerHTML=`<p class="label-color" ><strong>City:</strong></p><span class="stat-value">    ${tmp.city}`
    fullTeamName.innerHTML=`<p class="label-color" ><strong>Full Name:</strong></p><span class="stat-value">   ${tmp.full_name}</span>`
    division.innerHTML=`<p class="label-color" ><strong>Division:</strong></p><span class="stat-value">   ${tmp.division}</span>`

aside.setAttribute("style","background-color:#101357;padding-left:20px;border-radius:5px;display:grid;justify-content:center;align-items:center; border: 5px solid white ")
aside.append(straightLine,nName, abbrev,city,division,conf,fullTeamName)

teamDiv.append(aside)
teamDiv.setAttribute("style","display:grid;grid-template-columns:3fr 1fr;column-gap:20px")
})
}



const sSearch=document.querySelector(".season-Search")
const main1= document.querySelector(".player-profile")
const sAvg= document.querySelector("main div.season-averages")
sAvg.addEventListener("click",(event)=>{
    emptyDiv.remove()
    main1.append(ptag1)
    main.prepend(main1)
    // main.append(sAvgStats)

    sAvg.setAttribute("style","display:grid;align-items:center;justify-content:center;grid-template-row:1fr 1fr 1fr")

    // main.setAttribute("style","display:grid;margin:50px 100px 50px 90px;")
   
    // sSearch.setAttribute('style',"background-image:none;background-color:green;display:grid;grid-template-columns:1fr;justify-content:center;")
    sAvg.remove()
     sAvgStats= document.createElement("div")
    //  sAvgStats.setAttribute("style","display:grid;grid-template-columns:1fr 1fr")
    sAvgStats.setAttribute('style',"background-image:none;background-color:#101357;display:grid;grid-template-rows:1fr 2fr;justify-content:center;max-width:100%;padding:20px;border-radius:17px")

    const sAvgForm=document.createElement("form")
        // sAvgForm.setAttribute("style","display:grid;justify-self:center")

    sAvgForm.setAttribute("style","grid-row:2/3;justify-content:center")


    const sAvgNumb=document.createElement("input")
    sAvgNumb.setAttribute("type","number",)
    sAvgNumb.setAttribute('min','1979')
    sAvgNumb.setAttribute('max','2021')
    sAvgNumb.setAttribute('name','selected_year')
    sAvgNumb.setAttribute('class','season-average-search')
    sAvgNumb.setAttribute("placeholder","Enter a season")
    sAvgNumb.setAttribute("style","width:200px;height:25px;border-radius:5px;min-width:50px;font-size:16px;text-align:center")


    const sAvgSubmit=document.createElement("input")
    sAvgSubmit.setAttribute("type","submit",)
    sAvgSubmit.setAttribute('class','sAvg-submit')
    sAvgSubmit.setAttribute('name','sAvg-submit')
    sAvgSubmit.setAttribute("style","font-size:16px")


    sAvgForm.append(sAvgNumb,sAvgSubmit)
    sAvgStats.append(sAvgForm)
    main.append(sAvgStats)

    sAvgForm.addEventListener("submit",(event)=>{
        event.preventDefault()
        

        const statsSection=document.createElement("div")
        statsSection.setAttribute("style","display:grid;display:grid;grid-template-columns:repeat(7,1fr);justify-content:center;max-width:100%;padding:;column-gap:;row-gap:0px;")


        sSearch.setAttribute("style","width:100px;hegiht:20px ;max-height:20px")

        sAvgStats.innerHTML=``
        sAvgStats.prepend(sAvgForm)
        // sAvgForm.setAttribute("style","display:grid;align-items:center;justify-items:center;")

        sAvgForm.setAttribute("style","display:grid;justify-self:center;align-self:center;justify-content:center;align-content:center;justify-items:center;align-items:center;margin-top;25px;row-gap:10px;")

        const year=event.target.selected_year.value
        fetch (`https://www.balldontlie.io/api/v1/players?search=${name}`)
        .then(response=>response.json())
        .then(response=> {
           const result= response.data[0].id
        fetch(`https://www.balldontlie.io/api/v1/season_averages?season=${year}&player_ids[]=${result}`)
    .then(season=>season.json())
    // .then(season=>console.log(season))
    .then(season=>{
        let seasonObj={}
        console.log(season)

        if (season.data.length===0){
            const alertMessage=document.createElement("p")
            alertMessage.innerHTML="<p><strong><em>No data retrieved from this player for this season<em></strong></p>"
            alertMessage.setAttribute("style","color:white;font-size:20px")
            sAvgStats.append(alertMessage)
        }
        
        
        for (let stat in season.data[0]){
           
            if(stat!=="player_id"){
             seasonStats=document.createElement("p")
            seasonStats.setAttribute("style","color:white;border:1px solid white;text-align:center;")
            const statName=stat[0].toUpperCase()+stat.slice(1)
            seasonStats.innerHTML=`<p class="test">${statName}:</p> <p class="stat-value">${season.data[0][stat]}</p>`
            statsSection.append(seasonStats)
            sAvgStats.append(statsSection)
            }
            
        }
        
    })

    })
})

})
const ptag1=document.querySelector(".ptag1")
const emptyDiv=document.createElement("div")



    const searchSubmit=document.querySelector("#submit")
    const firstForm= document.querySelector("form")

    firstForm.addEventListener("submit",(event)=>{
        main.innerHTML=''
        main1.append(ptag1)
        main.prepend(main1)
        main.append(sAvg)
        
   const select=document.querySelector(".Select")
 event.preventDefault()
 if (select){
     select.remove()
     }
   
     if(emptyDiv){
        emptyDiv.remove()
        main.prepend(main1)

     }
     if(sAvgStats){
        sAvgStats.remove()
        main.append(sAvg)
     }
        teamDiv.setAttribute("style","display:none")
        main.setAttribute("style","display:grid;margin-top:50px;margin-bottom:50px")
        
         name= event.target.player.value
        console.log(name)
        
    
        fetch (`https://www.balldontlie.io/api/v1/players?search=${name}`)
    .then(response=>response.json())
    // .then(response=>console.log(response.data))
    .then(response=> {

        const playerError=document.createElement("p")
        if (response.data.length===0){
            //  main.innerHTML=''
            const footer=document.querySelector("footer p")
          
            const returnHome=document.createElement("p")
            returnHome.innerHTML=`<button>Click here to return to Home page</button`
            returnHome.setAttribute("style","text-align:center; font-size:25px;")

            returnHome.addEventListener("click",(event)=>{
                location.reload()
            })


            main1.remove()
            sAvg.remove()
            main.setAttribute("style","display:grid;grid-template-columns:1fr;grid-template-rows:repeat(3,1fr);margin:50px 100px 350px 100px;")
            playerError.innerHTML=`<p class="search-error"> No match. Player not found.</p>`
                playerError.setAttribute("style", "font-size:25px;")                                   

            footer.setAttribute("style","text-align:center,margin-bottom:40px;")
            main.append(playerError,returnHome)
        }
     

            // main.remove(playerError)
            // main.append(sAvg)
        
        
       const result= response.data[0].id
        //player_id^
       const athleteFirstName=response.data[0].first_name ||"N/a"
       const athleteLastName=response.data[0].last_name ||"N/a"
       const athletePosition=response.data[0].position ||"N/a"
       const athleteWeight=response.data[0].weight_pounds  ||"N/a"
       const athleteTeam=response.data[0].team.name ||"N/a"
       const athleteHeight=response.data[0].height_feet + "' "+response.data[0].height_inches ||"N/a"
      


       main1.addEventListener("click",(event)=>{
        if (sAvgStats){
            sAvgStats.remove()
            main.append(sAvg)
            sSearch.setAttribute("style","display:none")
        }
    
        ptag1.remove()
        emptyDiv.setAttribute("style","display:grid; border:1px solid-grey;grid-template-columns:1fr 1fr;background-color: #101357; text-align:center;color:white; font-size:20px;border-radius:17px;border:2px solid #101357;")
        // main1.setAttribute("style","background-image:none;background-color:black;")
        main1.remove()
    
       const playerFirstName= document.createElement("p")
       const playerLastName= document.createElement("p")
       const playerPosition=document.createElement("p")
        const playerWeight=document.createElement("p")
        const playerHeight=document.createElement("p")
        const playerTeam=document.createElement("p")




        // if(athleteFirstName===null||athleteLastName===null||athletePosition===null||athleteWeight===null||athleteWeight===null||athleteHeight===null||athleteTeam===null){
        //     return "N/a"
        // }

       

    
        playerFirstName.innerHTML=`<strong>First Name:</strong><p class="stat-value">${athleteFirstName}</p>`
        playerLastName.innerHTML=`<strong>Last name:</strong> <p class="stat-value">${athleteLastName}</p>`
        playerPosition.innerHTML=`<strong>Position:</strong><p class="stat-value">${athletePosition}</p> `
        playerWeight.innerHTML=`<strong>Weight:</strong><p class="stat-value">${athleteWeight}lbs</p>`
        playerHeight.innerHTML=`<strong>Height:</strong><p class="stat-value">${athleteHeight}</p> `
        playerTeam.innerHTML=`<strong>Team:</strong><p class="stat-value">${athleteTeam}</p> `

       
        emptyDiv.innerHTML=""
        emptyDiv.append(playerFirstName,playerHeight,playerLastName,playerPosition,playerTeam,playerWeight)
        main.prepend(emptyDiv)})
        console.log(result)

    //  fetch(`https://www.balldontlie.io/api/v1/season_averages?season=2010&player_ids[]=${result}`)
    // .then(pp=>pp.json())
    // .then(pp=>console.log(pp))
})

})


// const playerP=document.createElement("p")
// playerP.textContent="Player Profile"
// playerP.classList.add(".hover:hover")

// const seasonAvg=document.createElement("p")
// seasonAvg.textContent="Season Averages"

// const main=document.querySelector("main")
// main.append (seasonAvg,playerP)
// main.setAttribute("style","display:grid;grid-template-columns:50% 50%;justify-items:center;text-align:center;align-items:center;")
// })

// fetch (`https://www.balldontlie.io/api/v1/players?search=${name}`)
// .then(response=>response.json())
// // .then(response=>console.log(response.data))
// .then(response=> {
//    const result= response.data[0].id