let count = 0;

// set add event listener to the Button
document.getElementById('input-btn').addEventListener('click', function(){
    // that means button is working
    // initialize input text field
    const inputValue = document.getElementById('input-value').value;
    
    count++; //increase count value when clicked

    // introduce the table 
    const tableContainer =document.getElementById('table-container');

    // create a table row and it's content
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}</td>
    <td>${inputValue}</td>
    <td>
        <button class="btn btn-danger me-2 px-lg-4 delete-btn">Delete</button>
        <button class="btn btn-primary me-2 px-lg-4">Done</button>
    </td>
    
    `; 

    tableContainer.appendChild(tr);
    document.getElementById('input-value').value = '';

    // now work for delete button

    const elements = document.querySelectorAll(".delete-btn");

    // use for loop to get single value from the table list
    for(const element of elements){
        element.addEventListener('click', function(e){
            e.target.parentNode.parentNode.style.display = 'none';
        })
    }

    // delete button is working fine
});

// now delete all button
document.getElementById('delete-All-btn').addEventListener('click', function(e){
    e.target.parentNode.parentNode.style.display = 'none';
})