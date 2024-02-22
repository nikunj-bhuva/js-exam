var arr = [[9, 6, 1],
           [10, 15, 25],
           [7, 5, 30]];

for(var i=0; i<arr.length; i++)
{
    for(var j=0; j<arr.length; j++)
    {
        if(arr[i][j]%3==0 && arr[i][j]%5==0)
        {
            console.log(arr[i][j]);
        }
    }
}