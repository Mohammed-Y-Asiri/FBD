
ar = [6,2,8,6,1,3,9,9,10,4,5,3,10,2,8,9,4]

uniqueNumbers(ar)

/**
 * 
 * @param arr The array to search through
 */
function uniqueNumbers(arr)
{
    //Since we are dealing with numbers, sorting before hand is more efficient
    arr.sort(function(a, b){return a-b})

    console.log(arr)

    //This array will contain the unique numbers
    var uniqueNumbers = []

    //loop through all the numbers of the array
    for(i = 0; i < arr.length ; i++)
    {
        //If the current element is not equal to the next element, it is unique
        if(arr[i] != arr[i+1])
        {
            uniqueNumbers.push(arr[i])
        }
        //If the current element is equal to the next element
        //it wil loop until find a different number, then jump to it
        else
        {
            for(j = i+1; j < arr.length; j++)
            {
                //if different number found, jump to it by assigning i to j-1, and break the inner loop
                if(arr[i] != arr[j])
                {
                    i = j-1
                    break
                }
                //if reached the end of the array, break the inner and outer loop by breaking the conditions
                else if (j + 1 >= arr.length)
                {
                    i = j
                }
            }
        }
    }
    console.log(uniqueNumbers)
}