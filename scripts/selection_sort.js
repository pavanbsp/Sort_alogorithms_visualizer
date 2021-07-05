var worst_sel = " - O(n&#xB2;)"
var average_sel = " - O(n&#xB2;)"
var best_sel = " - O(n&#xB2;)"
var worstspace_sel = "    - O(1)"
//var alert = "🟨 - Unsorted\n🟦 - Comparing\n🟥 - Swapping\n🟩 - Sorted\n"
var sel = "The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array. <br><br> 1) The subarray which is already sorted. <br><br> 2) Remaining subarray which is unsorted."


function Selection_sort()
{
    c_delay=0;
    document.getElementById("demo").innerHTML = "<a href='https://en.wikipedia.org/wiki/Selection_sort' target='blank' style='font-size: 60px';>Selection sort</a>"
    document.getElementById("w").innerHTML = worst_sel;
    document.getElementById("avg").innerHTML = average_sel;
    document.getElementById("bc").innerHTML = best_sel;
    document.getElementById("wc").innerHTML = worstspace_sel;
    document.getElementById("sort").innerHTML = sel;
    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"blue");//Color update

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"blue");//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"Gold");//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"blue");//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],"Gold");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"red");//Height update
            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[index_min],div_sizes[index_min],"Gold");//Color update
        }
        div_update(divs[i],div_sizes[i],"Chartreuse");//Color update
    }
    div_update(divs[i],div_sizes[i],"Chartreuse");//Color update

    enable_buttons();
}