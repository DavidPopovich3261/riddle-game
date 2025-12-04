import exports from "./riddles/importes.js"
import {createPlayer,addSolveTime,showStats} from "./utils/Player.js"
import input from "analiza-sync";
import {measureSolveTime} from "./utils/measureSolveTime.js"
import { askRiddle } from "./utils/Riddle_func.js";


console.log("Welcome to the Riddle Game!");
let player=createPlayer(input("what's your name?"))
exports.forEach((riddle)=>{
let time =measureSolveTime(()=>askRiddle(riddle))
addSolveTime(player,time)
})
showStats(player)