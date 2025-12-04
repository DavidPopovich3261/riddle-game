function createPlayer(name){
    let player ={"name":name,"times":[]}
    return player
}

function addSolveTime(player, seconds){
    player.times.push(seconds)
}

function showStats(player){
    let total_time=0
    player.times.filter((second)=>total_time+=second)
    let average_time=(total_time/player.times.length)
    console.log(`total_time:${total_time} second`,`average_time:${average_time} second`);      
}
export{createPlayer,addSolveTime,showStats}
