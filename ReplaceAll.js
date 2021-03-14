
str = 'dog is a good dog because dog loves dogs';
replaceAll(str,"dog","monkey")

/**
 * 
 * @param str The string to replace words within it 
 * @param replacedWord The word to be replaced 
 * @param newWord The new word to be added to str 
 */
function replaceAll(str ,replacedWord, newWord)
{
    //Split str, the returned array contains parts of the string in each index splitted by replaceWord
    //Example : "Hello World!" splitted by (" ") gives ["Hello","World!"]
    var splittedString = str.split(replacedWord)

    //returnedString is the final string with the replaced words
    //Initially has the element in first index of splittedString
    var returnedString = splittedString[0]

    //This for loop adds newWord between elements in splittedString to returnedString
    for(i = 1 ; i < splittedString.length; i++)
    {
        returnedString += newWord + splittedString[i]
    }

    console.log(returnedString)
}