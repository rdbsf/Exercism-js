

export default function toRna(strand)
{

    const strandMap = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'};

    const dna = strand.split('');

    return dna.reduce((combined, char) => {

        if (!(char in strandMap))
        {
            throw 'Invalid input DNA.';
        }
        return combined + strandMap[char];

    }, '');

}

module.exports.toRna = toRna;

