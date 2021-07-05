var worst_mer = " - O(n log n)"
var average_mer = " - O(n log n)"
var best_mer = " - O(n log n)"
var worstspace_mer = " - O(n)"
//var alert = "🟨 - Unsorted\n🟦 - Comparing\n🟥 - Swapping\n🟩 - Sorted\n"
var mer = "Merge Sort is an efficient, stable sorting algorith that makes use of the divide and conquer strategy. Conceptually the algorithm works as follows:<br><br>1.Divide the unsorted list into n sublists, each containing one element(a list of one element is considered sorted)<br> 2.Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list."



function Merge()
{
    c_delay=0;
    document.getElementById("demo").innerHTML = "<a href='https://en.wikipedia.org/wiki/Merge_sort' target='blank' style='font-size: 60px';>Merge sort</a>"
    document.getElementById("w").innerHTML = worst_mer;
    document.getElementById("avg").innerHTML = average_mer;
    document.getElementById("bc").innerHTML = best_mer;
    document.getElementById("wc").innerHTML = worstspace_mer;
    document.getElementById("sort").innerHTML = mer;
    merge_partition(0,array_size-1);

    enable_buttons();
}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");//Color update
        }
        else if(q>end)
        {
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");//Color update
        }
        else if(div_sizes[p]<div_sizes[q])
        {
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");//Color update
        }
        else
        {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");//Color update
        }
    }

    for(var t=0;t<k;t++)
    {
        div_sizes[start++]=Arr[t];
        div_update(divs[start-1],div_sizes[start-1],"Chartreuse");//Color update
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(divs[mid],div_sizes[mid],"blue");//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}

