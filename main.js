var randon_number=Math.floor();

function Mathfloor(){
    array_1=['pen,paper,book,bottle'];
    randon_no=Math.floor((Math.random()*array_1.length)+1);
    element_of_array=array_1[randon_no];
}

console.log("quick_draw_data_set");
var sketch = document.getElementById(sketch_to_draw);

var time_counter=0;
var timer_check="";
var drawn_sketch="";
var answer_holder="";
var score=0;

function draw(){
check_sketch();
if (drawn_sketch==sketch){
    answer_holder=set;
}
}

function check_sketch(){
    time_counter=1;
    console.log(time_counter);
    if (time_counter>400){
        time_counter=0;
        timer_check=completed;
    }
    if (time_counter==completed||answer_holder==set){
timer_check="";
answer_holder="";
updateCanvas()
    }
}

function updateCanvas(){
randon_number=Math.floor((Math.random()*quick_draw_data_set.length)+1);
console.log(randon_number);
}

function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    
}

