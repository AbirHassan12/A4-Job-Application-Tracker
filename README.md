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

    = event bubbling is a process when an event occurs on an element, it gradually rises towards its parent elements.
    When we click on an HTML element ,the event goes from top to bottom
    Then event reaches the parent element we clicked on.
    Then event spreads from the target element upwards to the parent, grandparent and all the way to the window. This is the process of event bubbling


4. What is Event Delegation in JavaScript? Why is it useful?
    = Event Delegation is a technic ,where we  add event listener to a parent element instead of add event listener every element.

     it is very useful because, if we have 100 buttons, creating 100 separate listeners will consume a lot of browser memory. but using a single parent listener consumes much less memory.  


5. What is the difference between preventDefault() and stopPropagation() methods?
    = preventDefault(): it is used to prevent the default behavior of an element in the browser.
    example: clicking on a link  usually takes us to another page. if we use preventDefault(), clicking on the link will not change the page.

    stopPropagation(): it is used to stop Event Bubbling. it prevents the event from propagating to its parent elements.

example: Suppose there is a button inside a div. we only want to trigger the click event of the button, but we want to stop the event of the parent div. Then use stopPropagation() on the button event.

  