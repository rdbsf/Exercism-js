
export default function toRna(strand)
{

    const strandMap = new Map([['G', 'C'], ['C', 'G'], ['T', 'A'], ['A', 'U']]);

    return strand.split('').reduce((combined, char) => {

        if (!strandMap.has(char))
        {
            throw 'Invalid input DNA.';
        }
        return combined + strandMap.get(char);

    }, '');

}

module.exports.toRna = toRna;

