function key(event){
    if(event.which==13){//enter key
        if(rw==0){
            fid = f();
            rw = setInterval(run,100);
            rs.play()
            bw = setInterval(ba,100);
            scrw= setInterval(updateScore,100);
            fw = setInterval(move,100);
        }
        
    }
    if(event.which==32){//space key
        if(jw==0){
            clearInterval(rw);
            rs.pause()
            rw = -1
            jw = setInterval(jump,100);
            js.play();
        }
        
    }
}

//sound config
var rs = new Audio("run.mp3")
rs.loop = true;
var js = new Audio("jump.mp3");
var ds = new Audio("dead.mp3");
var ws = new Audio("winsound.wav");

//flame function config
var fid = 0;
var m = 0;
var y =0;
function f(){
    for(var y = 0;y<10;y++){
        var i = document.createElement("img");
        i.src = "flame.gif";
        i.className = "f";
        i.id = "a"+y;
        m = m +500;
        i.style.marginLeft = m+"px"
        document.getElementById("b").appendChild(i)
    }
    
    
}

//run boy function config
var rw = 0;
var r = 1;
function run(){
    var rimg = document.getElementById("boy");

    r = r + 1;
    if(r==8){
        r=1;
    }
    rimg.src = "Run ("+r+").png"
}

//background function cnfig
var b  = 0;
var bw = 0;
function ba(){
    var ba = document.getElementById('b');

    b = b -20;
    ba.style.backgroundPositionX = b+"px";
}

// updateScore function config
var scrw =0;
var scr = 0;
var score;
function updateScore(){
    scr = scr + 5;
    score = document.getElementById("score");

    score.innerHTML=scr;

    if(scr==870){
        win();
    }

}

// flame move function config
var fw = 0;
function move(){
    for(y=0;y<10;y++){
        var move = document.getElementById("a"+y);
        var z = getComputedStyle(move);
        var p = parseInt(z.marginLeft);
        p = p - 30;
        move.style.marginLeft = p+"px";
        
        if(p<50 && p>-10){
            if(mt>370){
                clearInterval(rw);
                clearInterval(jw);
                jw = -1;
                clearInterval(scrw);
                clearInterval(bw);
                clearInterval(fw);
                dw = setInterval(dead,100);
                rs.pause();
                ds.play();
            }
        }
    }
    
}

//jump function config
var jw = 0;
var j = 1;
var mt = 490;
function jump(){
    var jimg = document.getElementById("boy");
    if(j<=6){
        mt = mt -30;
    }
    if(j>=7){
        mt = mt +30;
    }
    j = j + 1;
    if(j==13){
        j=1;
        clearInterval(jw);
        jw = 0;
        rw = setInterval(run,100);
        rs.play();

        if(fid==0){
            fid = f();
        }
        if(scrw==0){
            scrw= setInterval(updateScore,100);
        }
        if(bw==0){
            bw = setInterval(ba,100);
        }
        if(fw==0){
            fw = setInterval(move,100);
        }
    }
    jimg.src = "Jump ("+j+").png"
    jimg.style.marginTop = mt+"px";
}

// dade boy function config
var d = 0;
var dw = 0;
function dead(){
    var dimg = document.getElementById("boy");
    d = d +1;
    if(d==11){
        d=10;
        dimg.style.marginTop="490px";
        document.getElementById("end").style.visibility="visible";
        score.style.display = "none";
        document.getElementById("endscore").innerHTML=scr;
    }
    dimg.src = "Dead ("+d+").png"
}

//reload page
function re(){
    location.reload();
}
//after win game
function win(){
        clearInterval(rw);
        rw = 0 ;
        rs.pause();
        document.getElementById("win").style.visibility="visible";
        ws.play();
}
