

export function validate(num)
{
    if (num < 10)
    {
        return true;
    }

    const nums =  (''+num).split('').map(x => parseInt(x));

    return nums.reduce((total, amount) => {total += Math.pow(amount, nums.length); return total}, null) === num;

}