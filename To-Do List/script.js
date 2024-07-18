document.getElementById('btn').addEventListener('click', 
function () {
    // Getting the input value and date
    let input = document.getElementById('input').value;
    let date = document.getElementById('dob').value;

    // Creating list elements
    let elem = document.createElement('li');
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');
    btn1.innerText = "Done";
    btn2.innerText = "Delete";
    elem.innerText = input + " - " + date; 

    // Adding a custom attribute to store the date 
    elem.setAttribute('data-date', new Date(date).getTime());

    // Appending the elements
    let ul = document.querySelector('ul');

    // Getting all existing tasks
    let tasks = Array.from(ul.getElementsByTagName('li'));

    // Appending the new task
    ul.appendChild(elem);
    elem.appendChild(btn1);
    elem.appendChild(btn2);

    // Adding styles to buttons
    btn1.style.border = "none";
    btn1.style.marginLeft = "3%";
    btn1.style.borderRadius = "8px";
    btn1.style.backgroundColor = "#b4b3d8";

    btn2.style.border = "none";
    btn2.style.marginLeft = "3%";
    btn2.style.borderRadius = "8px";
    btn2.style.backgroundColor = "#b4b3d8";

    // Adding function to the "Done" button
    btn1.addEventListener('click', function () {
        elem.style.textDecoration = "line-through";
    });

    // Adding function to the "Delete" button
    btn2.addEventListener('click', function () {
        elem.remove();
    });

    // Sorting tasks based on date 
    tasks.sort((a, b) => {
        return a.getAttribute('data-date') - b.getAttribute('data-date');
    });

    // Appending tasks in the sorted order
    tasks.forEach(task => ul.appendChild(task));

    // restarting the input field
    document.getElementById('input').value = "";
    document.getElementById('dob').value = "";
});
