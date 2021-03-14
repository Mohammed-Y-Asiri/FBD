

var arr = [1,2,3,4,5,6,7,8,9,10]
var ar = [10,20,30,40,50,60,70,80,90]

binarySearch(arr,10,0,arr.length-1)
binarySearch(ar,70,0,ar.length-1)

  /**
   * bineraySearch is a recursive function that takes:
   * @param {*} arr the array to search through its element
   * @param {*} num the wanted number
   * @param {*} min the minimum indexe to search through
   * @param {*} max the maximum indexe to search through
   * @returns 
   */
function binarySearch(arr,num,min,max)
{
    //The array has to be sorted ascendingly for the algorithm to work
    arr.sort(function(a, b){return a-b})

    //If the minimum index passed the maximum index, the algorithm ends without finding the number
    if(min > max){
        console.log("The element '"+num+"' doesn't exist in array "+arr)
        return
    }

    //Index of the searched item is the middle of max and min
    var index = Math.floor((min+max) / 2)

    //To diplay the steps taken to find the item
    console.log("Min: "+min+" Max: "+max+" Index: "+index)

    //If the current item is the wanted item, return
    if(arr[index] == num)
    {
        console.log("The element '"+num+"' is in index '"+index+"'")
        return 
    }
    else
    {
        //if the wanted number is greater than the current number:
        //call the method recursivly with the min being the index of the next element (index + 1), max unchanged
        if(num > arr[index])
        {
            binarySearch(arr,num,index+1,max)
        }
        
        //if the wanted number is less than the current number:
        //call the method recursivly with the max being the index of the previous element (index - 1), min unchanged
        else if (num < arr[index])
        {
            binarySearch(arr,num,min,index-1)
        }
    }
}