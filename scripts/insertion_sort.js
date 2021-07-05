var worst_ins = " - O(n&#xB2;)"
var average_ins = " - O(n&#xB2;)"
var best_ins = " - O(n)"
var worstspace_ins = "    - O(1)"
//var alert = "🟨 - Unsorted\n🟦 - Comparing\n🟥 - Swapping\n🟩 - Sorted\n"
var ins = "Insertion Sort is a simple sorting algorithm that iterates through an array and at each iteration it removes one element from the array, finds the location it belongs to in the sorted list and inserts it there, repeating until no elements remain in the unsorted list. It is an in-place, stable sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted. It is more efficient in practice compared to other quadratic sorting algorithms like bubble sort and selection sort."


function Insertion()
{
    c_delay=0;
    document.getElementById("demo").innerHTML = "<a href='https://en.wikipedia.org/wiki/Insertion_sort' target='blank' style='font-size: 60px';>Insertion sort</a>"
    document.getElementById("w").innerHTML = worst_ins;
    document.getElementById("avg").innerHTML = average_ins;
    document.getElementById("bc").innerHTML = best_ins;
    document.getElementById("wc").innerHTML = worstspace_ins;
    document.getElementById("sort").innerHTML = ins;
    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"blue");//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"red");//Color update
            div_update(divs[i+1],div_sizes[i+1],"red");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[i+1],div_sizes[i+1],"red");//Height update
    
            div_update(divs[i],div_sizes[i],"blue");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"Gold");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"Gold");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"Chartreuse");//Color update
        }
    }
    for(var t=0;t<array_size;t++)
    {
        div_update(divs[t],div_sizes[t],"Chartreuse");//Color update
    }

    enable_buttons();
}
