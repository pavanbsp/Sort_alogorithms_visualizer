var worst_h = " - O(n log n)"
var average_h = " - O(n log n)"
var best_h = " - O(n log n)"
var worstspace_h = "    - O(1)"
//var alert = "🟨 - Unsorted\n🟦 - Comparing\n🟥 - Swapping\n🟩 - Sorted\n"
var heap = "Heap Sort can be thought of as an improved selection sort that uses the heap data structure rather than a linear-time search to find the maximum or minimum element.<br><br>The heapsort algorithm can be divided into two parts. In the first step, a heap is built out of the data. The heap is often placed in an array with the layout of a complete binary tree. In the second step, a sorted array is created by repeatedly removing the largest element from the heap (the root of the heap), and inserting it into the array. "


function Heap()
{
    c_delay=0;
    document.getElementById("demo").innerHTML = "<a href='https://en.wikipedia.org/wiki/Heapsort' target='blank' style='font-size: 60px';>Heap sort</a>"
    document.getElementById("w").innerHTML = worst_h;
    document.getElementById("avg").innerHTML = average_h;
    document.getElementById("bc").innerHTML = best_h;
    document.getElementById("wc").innerHTML = worstspace_h;
    document.getElementById("sort").innerHTML = heap;
    heap_sort();
    
    enable_buttons();
}

function swap(i,j)
{
    div_update(divs[i],div_sizes[i],"red");//Color update
    div_update(divs[j],div_sizes[j],"red");//Color update

    var temp=div_sizes[i];
    div_sizes[i]=div_sizes[j];
    div_sizes[j]=temp;

    div_update(divs[i],div_sizes[i],"red");//Height update
    div_update(divs[j],div_sizes[j],"red");//Height update

    div_update(divs[i],div_sizes[i],"Gold");//Color update
    div_update(divs[j],div_sizes[j],"Gold");//Color update
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && div_sizes[l]>div_sizes[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],div_sizes[largest],"blue");//Color update
        }

        largest=l;

        div_update(divs[largest],div_sizes[largest],"red");//Color update
    }

    if(r<n && div_sizes[r]>div_sizes[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],div_sizes[largest],"blue");//Color update
        }

        largest=r;

        div_update(divs[largest],div_sizes[largest],"red");//Color update
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        div_update(divs[i],div_sizes[i],"Chartreuse");//Color update
        div_update(divs[i],div_sizes[i],"blue");//Color update

        max_heapify(i,0);

        div_update(divs[i],div_sizes[i],"blue");//Color update
        div_update(divs[i],div_sizes[i],"Chartreuse");//Color update
    }
    div_update(divs[i],div_sizes[i],"Chartreuse");//Color update
}