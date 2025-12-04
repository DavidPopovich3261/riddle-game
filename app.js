import {exports} from "./riddles/importes.js"
import {createPlayer,addSolveTime,showStats} from "./utils/Player.js"
import input from "analiza-sync";
import {measureSolveTime} from "./utils/measureSolveTime.js"
import { askRiddle } from "./utils/Riddle_func.js";
import {sortriddles} from "./Bonus/Sort_riddles.js"
import {choosedifficulty} from "./Bonus/Choose_difficulty.js"

let new_exports=exports
console.log("Welcome to the Riddle Game!");
let player=createPlayer(input("what's your name?"))

let Choosedifficulty=input("Choose a difficulty level")
if(Choosedifficulty){new_exports=choosedifficulty(exports,Choosedifficulty)}
let Sortdifficulty=input("Sort by difficulty level? y/n")
if(Sortdifficulty=="y"){new_exports=sortriddles(exports)}

new_exports.forEach((riddle)=>{
let time =measureSolveTime(()=>askRiddle(riddle))
addSolveTime(player,time)
})
showStats(player)