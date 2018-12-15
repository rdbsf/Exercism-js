
function solve(x, y)
{

    if (typeof x !== 'number' || typeof y !== 'number')
    {
        return null;
    }

    if (x > 10 || y > 10)
    {
        return 0;
    }

    if (x > 5 && x <= 10 || y > 5 && y <= 10)
    {
        return 1;
    }

    if (x > 1 && x <= 5 || y > 1 && y <= 5)
    {
        return 5;
    }

    if (x <= 0 && x <= 1 || y <= 0  && y <= 1)
    {
        return 10;
    }

}

module.exports.solve = solve;