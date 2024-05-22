//Variable

const btn = document.querySelector('#new-quote');
const quote=document.querySelector('.quote');
const person=document.querySelector('.person');

const qoutes = [{
    quote:"Great things in business are never done by one person. They're done by a team of people.",
    person:"Steve Jobs"
},
{
    quote:"A person who never made a mistake never tried anything new.",
    person:"Albert Einstien"
},
{
    quote:"You can search throughout the entire universe for someone who is more deserving of your love and affection than you are yourself, and that person is not to be found anywhere. You yourself, as much as anybody in the entire universe deserve your love and affection.",
    person:"Buddha"
}
];

btn.addEventListener('click',function(){
    let rand= Math.floor(Math.random()*qoutes.length);

    quote.innerText = qoutes[rand].quote;
    person.innerText = qoutes[rand].person;
});