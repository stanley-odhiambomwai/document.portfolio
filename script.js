const works = [
    {
        id: 1,
        text: 'walking alongside the street',
        itscomplited: true
    },

    {
        id: 2,
        text: 'studying online',
        itscomplited: true
    },

    {
       id: 3,
       text: 'dancing music',
       itscomplited: false
    }
];

const workText = works.map(function(work){
   return work.text;
});

console.log(workText)
