var worst_bubble = " - O(n&#xB2;)"
var average_bubble = " - O(n&#xB2;)"
var best_bubble = " - O(n)"
var worstspace_bubble = "    - O(1)"
var bubble = "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements bubble to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems."

function Bubble()
{
    c_delay=0;
    document.getElementById("demo").innerHTML = "<a href='https://en.wikipedia.org/wiki/Bubble_sort' target='blank' style='font-size: 60px';>Bubble sort</a>"
    document.getElementById("w").innerHTML = worst_bubble;
    document.getElementById("avg").innerHTML = average_bubble;
    document.getElementById("bc").innerHTML = best_bubble;
    document.getElementById("wc").innerHTML = worstspace_bubble;
    document.getElementById("sort").innerHTML = bubble;
    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"blue");//Color update
            div_update(divs[j+1],div_sizes[j+1],"blue");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "red");//Color update
                div_update(divs[j+1],div_sizes[j+1], "red");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red");//Height update
                div_update(divs[j+1],div_sizes[j+1], "red");//Height update
            }
            div_update(divs[j],div_sizes[j], "Gold");//Color updat
        }
        div_update(divs[j],div_sizes[j], "Chartreuse");//Color update
    }
    div_update(divs[0],div_sizes[0], "Chartreuse");//Color update

    enable_buttons();
    console.log("hi");
}