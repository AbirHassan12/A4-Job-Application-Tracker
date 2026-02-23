1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

= getElementById used to find specific id.
  
  getElementsByClassName used to find all specific class. 

  querySelector  used to find element by CSS selector. and querySelectorAll return us a Node List.



2. How do you create and insert a new element into the DOM?

  = first create a new element what we using using document.createElement().
  then add text,class or id into the created element.
  then where we want to set the element we append there by using appendChild()

  example from our project:

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




3. What is Event Bubbling? And how does it work?

    =

  