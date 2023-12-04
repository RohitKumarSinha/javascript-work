var num = [1, 2, 3, 4, 5]

function printReverse(num)
{
  for (var i = num.length - 1; i >= 0; i--)
      console.log(num[i]);
}

printReverse(num);


function isUniform(word)
{
    for (var j = 0; j < word.length - 1; j++)
    {
        if (word[j] !== word[j + 1])
           return false;
    }

    return true;
}

function sumArray(num)
{
    var sum = 0;
    for (var i = 0; i < num.length; i++)
    {
        sum += num[i];
    }

    return sum;
}

function max(num)
{
    var maxi = num[0];
    for (var  i = 0; i < num.length; i++)
    {
        if (maxi < num[i])
           maxi = num[i];
    }

    return maxi;
}