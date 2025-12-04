function sortriddles(reddlse){
let new_reddlse=reddlse.sort((a,b)=>a["difficulty"].localeCompare(b["difficulty"]))
return new_reddlse
}
export {sortriddles}
