var gameloop = false;
var sequence = [];
var ans_seq = [];
var ans_index = 0;
var lvl = 0;

function checkLists(list1,list2){
    for (var i = 0; i<list2.length; i++){
        if (list1[i] != list2[i]) {
            return false;
        }
    }
    return true;
}

function randrange(min, max){
    return Math.floor((Math.random()*(max-min+1))+min);
}

function activate(id){
    $("#"+id).fadeOut(300);
    $("#"+id).fadeIn(300);
}

function nextSequence(){
    $(".title").text("Level "+lvl);
    var blink_button = randrange(1,4);
    sequence.push(blink_button);
    activate(blink_button);
}

function gameover(){
    gameloop = false;
    sequence = [];
    ans_seq = [];
    ans_index = 0;
    $(".title").text("Game Over! Score: "+lvl);
    lvl = 0;
    $("#again").toggleClass("hidden")
}

function answer(id){
    ans_seq.push(parseInt(id));
    if (sequence.length === ans_seq.length) {
        if (checkLists(sequence,ans_seq)){
            ans_seq = [];
            ans_index = 0;
            lvl++;
            setTimeout(nextSequence,500);
        } else {
            gameover();
        }

    } else {
        console.log(sequence);
        console.log(ans_seq);
        console.log(ans_index);
        if (sequence[ans_index] != ans_seq[ans_index]) {
            gameover();
        }
        ans_index++;
    }
}

$("#play").click(function(){
    $(this).toggleClass("hidden");
    gameloop = true;
    if (gameloop){
        nextSequence();
    }
});

$("#again").click(function(){
    $(this).toggleClass("hidden");
    gameloop = true;
    if (gameloop){
        nextSequence();
    }
});

$(".box").click(function(){
    if (gameloop){
        answer($(this).attr("id"));
    }
});






