function choosedifficulty(reddlse,Choose){
let new_reddlse=reddlse.filter((reddle) => reddle.difficulty==Choose)
return new_reddlse
}
export{choosedifficulty}