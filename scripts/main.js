

var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("new");
var inp_aspeed=document.getElementById("a_speed");

var butts_algos=document.querySelectorAll(".algos button");
var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

$(function() {
    var myPos = { my: "center top", at: "left bottom", of: window };
    $( "#j_dialog" ).dialog({
        autoOpen: true,
        modal: true,
        width: 350,
        height: 300,
        title: 'Select any algorithm to visualize',
        draggable: true,
        position: myPos,
        resizable: false,
    open: function(event,ui) {
        var init_time = 5;
        $("#number").html(init_time);
        setTimeout(countDown,1000);  
        function countDown(){
            init_time--;
                $("#number").html(init_time);
                if(init_time > 0){
                    setTimeout(countDown,1000);
                } else {
                    setTimeout(function(){
                    $("#j_dialog").dialog("close");
                    }, 500);
                }                     
        }
        jQuery('.ui-widget-overlay').on('click', function() {
        jQuery('#j_dialog').dialog('close');
        })
    },
    show: {
        effect: "highlight",
        duration: 1500
        },
    hide: {
        effect: "fade",
        duration: 1000
    }
    });
});
$( ".selector" ).dialog({
    closeOnEscape: false
});

function generate_array()
{
    cont.innerHTML="";
    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*( 150) ) + 5;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.2;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:Gold; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
    for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        //inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}
