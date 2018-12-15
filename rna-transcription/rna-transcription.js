

export default function toRna(strand)
{

    const strandMap = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'};

    const converted = strand.split('').map( char => strandMap[char] ).join('');

    if (converted.length !== strand.length)
    {
        throw 'Invalid input DNA.';
    }

    return converted;

}

module.exports.toRna = toRna;

