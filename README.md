# rock-paper-scissors

script.js：
Strat button => game_start() => getPlayerChoice(e) => playRound() => check_Winner()

promblems：
1. 分數到5時，直接跳回game_start()導致無法顯示5分

sol:
1. create another function to show the game result and disable the three buttons until press 'start' button. (disabble_listener())

物件：
hint ： 輸贏提示
points : 分數
three_btn : 
start 