let interviewList=[];
let rejectedList=[];

let totalCount=document.getElementById('total-count');
let interviewCount=document.getElementById('interview-count');
let rejectedCount=document.getElementById('rejected-count');

const allFilterBtn=document.getElementById('all-filter-btn');
const interviewFilterBtn=document.getElementById('interview-filter-btn');
const rejectedFilterBtn=document.getElementById('rejected-filter-btn');

const cardContainer=document.getElementById('card-container');

function calculateCard(){
    totalCount.innerText=cardContainer.children.length;
    interviewCount.innerText=interviewList.length;
    rejectedCount.innerText=rejectedList.length;
}
calculateCard();

function toggleStyle(id){
    allFilterBtn.classList.add('bg-gray-300', 'text-black');
    interviewFilterBtn.classList.add('bg-gray-300', 'text-black');
    rejectedFilterBtn.classList.add('bg-gray-300', 'text-black');

    allFilterBtn.classList.remove('btn-primary', 'text-white');
    interviewFilterBtn.classList.remove('btn-primary', 'text-white');
    rejectedFilterBtn.classList.remove('btn-primary', 'text-white');

    const selected=document.getElementById(id);
    selected.classList.remove('bg-gray-300', 'text-black');
    selected.classList.add('btn-primary', 'text-white')

}