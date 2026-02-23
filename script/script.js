let interviewList = [];
let rejectedList = [];
let currentStatus = 'all-filter-btn';

const totalCount = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('rejected-count');
const liveCount = document.getElementById('live-count');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const allCardSection = document.getElementById('card-container');
const filterSection = document.getElementById('filtered-section');
const mainContainer = document.querySelector('body');

function calculateCount() {
    const totalJobs = allCardSection.children.length;
    totalCount.querySelector('span').innerText = totalJobs;
    liveCount.innerText = totalJobs;
    interviewCount.querySelector('span').innerText = interviewList.length;
    rejectedCount.querySelector('span').innerText = rejectedList.length;
}
calculateCount();

function toggleStyle(id) {
    
    allFilterBtn.classList.add('bg-gray-300', 'text-black');
    interviewFilterBtn.classList.add('bg-gray-300', 'text-black');
    rejectedFilterBtn.classList.add('bg-gray-300', 'text-black');

    allFilterBtn.classList.remove('btn-primary', 'text-white');
    interviewFilterBtn.classList.remove('btn-primary', 'text-white');
    rejectedFilterBtn.classList.remove('btn-primary', 'text-white');

    const selected = document.getElementById(id);
    currentStatus = id;

    
    selected.classList.remove('bg-gray-300', 'text-black');
    selected.classList.add('btn-primary', 'text-white');

    
    if (id === 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    } else if (id === 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    } else if (id === 'rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
    }
}



mainContainer.addEventListener('click', function (event) {
    
    if (event.target.classList.contains('interviewBtn')) {
        const parenNode = event.target.parentNode.parentNode;

        const company = parenNode.querySelector('.company').innerText;
        const position = parenNode.querySelector('.position').innerText;
        const locationSalary = parenNode.querySelector('.location-salary').innerText;
        const description = parenNode.querySelector('.description').innerText;

        
        const statusBadge = parenNode.querySelector('.type');
        statusBadge.innerText = 'Interview';
        
        statusBadge.classList.remove('bg-base-300', 'bg-secondary', 'text-black');
        statusBadge.classList.add('bg-accent', 'text-white', 'rounded');

        const cardInfo = {
            company,
            position,
            locationSalary,
            status: 'Interview',
            description
        };

        const jobExist = interviewList.find(item => item.company == cardInfo.company);
        if (!jobExist) {
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item => item.company != cardInfo.company);

        if (currentStatus == 'rejected-filter-btn') {
            renderRejected();
        }
        if (currentStatus == 'interview-filter-btn') {
            renderInterview();
        }
        
        calculateCount();

    
    } else if (event.target.classList.contains('rejectedbtn')) {
        const parenNode = event.target.parentNode.parentNode;

        const company = parenNode.querySelector('.company').innerText;
        const position = parenNode.querySelector('.position').innerText;
        const locationSalary = parenNode.querySelector('.location-salary').innerText;
        const description = parenNode.querySelector('.description').innerText;

        
        const statusBadge = parenNode.querySelector('.type');
        statusBadge.innerText = 'Rejected';
        
        statusBadge.classList.remove('bg-base-300', 'bg-accent', 'text-black');
        statusBadge.classList.add('bg-secondary', 'text-white', 'rounded');

        const cardInfo = {
            company,
            position,
            locationSalary,
            status: 'Rejected',
            description
        };

        const jobExist = rejectedList.find(item => item.company == cardInfo.company);
        if (!jobExist) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.company != cardInfo.company);

        if (currentStatus == "interview-filter-btn") {
            renderInterview();
        }
        if (currentStatus == "rejected-filter-btn") {
            renderRejected();
        }

        calculateCount();

   
    } else if (event.target.classList.contains('delete') || event.target.closest('.delete')) {
        const parenNode = event.target.closest('.job');
        const companyName = parenNode.querySelector('.company').innerText;

        interviewList = interviewList.filter(item => item.company != companyName);
        rejectedList = rejectedList.filter(item => item.company != companyName);

        if (currentStatus == 'all-filter-btn') {
            parenNode.remove();
        } else {
            currentStatus == 'interview-filter-btn' ? renderInterview() : renderRejected();
        }

        calculateCount();
    }
});

function renderInterview() {
    filterSection.innerHTML = ''; 

    if (interviewList.length === 0) {
        filterSection.innerHTML = `
     <div class="flex flex-col items-center justify-center py-10 w-full text-center space-y-4 col-span-full">
        <img src="./images/jobs.png" alt="No jobs" class="w-40 mb-4">
            <h2 class="text-2xl font-bold">No jobs available</h2>
        <p class="text-[20px] text-gray-500">Check back soon for new job opportunities</p>
        </div>`;
        return;
    }

    for (let job of interviewList) {
        let div = document.createElement('div');
        div.className = 'job shadow-sm space-y-2 p-5 flex justify-between bg-white border-l-4 border-accent';
        div.innerHTML = `
            <div>
                <h2 class="company font-bold text-[20px]">${job.company}</h2>
                <p class="position">${job.position}</p>
                <p class="location-salary">${job.locationSalary}</p>
                <p class="type bg-accent text-white w-[120px] p-1 text-center mt-5 mb-5 rounded">Interview</p>
                <p class="description">${job.description}</p>
                <div class="flex gap-2">
                    <button class="interviewBtn btn btn-sm btn-accent" disabled>Interview</button>
                    <button class="rejectedbtn btn btn-sm btn-outline btn-secondary">Rejected</button>
                </div>
            </div>
            <div>
                <button class="delete btn btn-ghost rounded-full"><i class="fa-solid fa-trash-can"></i></button>
            </div>`;
        filterSection.appendChild(div);
    }
}

function renderRejected() {
    filterSection.innerHTML = '';

    if (rejectedList.length === 0) {
        filterSection.innerHTML = `
        
     <div class="flex flex-col items-center justify-center py-10 w-full text-center space-y-4 col-span-full">
        <img src="./images/jobs.png" alt="No jobs" class="w-40 mb-4">
            <h2 class="text-2xl font-bold">No jobs available</h2>
            <p class="text-[20px] text-gray-500">Check back soon for new job opportunities</p>
    </div>`;
        return;
    }

    for (let job of rejectedList) {
        let div = document.createElement('div');
        div.className = 'job shadow-sm space-y-2 p-5 flex justify-between bg-white border-l-4 border-secondary';
        div.innerHTML = `
            <div>
                <h2 class="company font-bold text-[20px]">${job.company}</h2>
                <p class="position">${job.position}</p>
                <p class="location-salary">${job.locationSalary}</p>
                <p class="type bg-secondary text-white w-[120px] p-1 text-center mt-5 mb-5 rounded">Rejected</p>
                <p class="description">${job.description}</p>
                <div class="flex gap-2">
                    <button class="interviewBtn btn btn-sm btn-outline btn-accent">Interview</button>
                    <button class="rejectedbtn btn btn-sm btn-secondary" disabled>Rejected</button>
                </div>
            </div>
            <div>
                <button class="delete btn btn-ghost rounded-full"><i class="fa-solid fa-trash-can"></i></button>
            </div>`;
        filterSection.appendChild(div);
    }
}