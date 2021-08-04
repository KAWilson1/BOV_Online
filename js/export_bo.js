/*
This file will eventually contain export logic, but for V1 of BOVO,
the project will only show/hide editing tools
*/

function stop_editing(){
    /*
        Hides "Delete" and "Insert Below" Headers
        Hides "Delete" and "Insert Below" sections within bo_units
    */
    var bo_container = document.querySelector('#bo_container');

    
    // For every bo_unit, hide "Delete" and "Insert Below" columns
    // Widen Notes column to take up the new space
    var bo_units = bo_container.querySelectorAll('div .bo_unit');
    for(var i = 0; i < bo_units.length; i++){
        var curr_row = bo_units[i].querySelector('.row');
        try{
            // Delete columns
            var to_delete;
            to_delete = curr_row.querySelector(".delete");
            to_delete.style.display = "none";
            to_delete = curr_row.querySelector(".insert");
            to_delete.style.display = "none";
            // Widen notes
            var notes_step = curr_row.querySelector(".note_step");
            notes_step.classList.remove("col-4");
            notes_step.classList.add("col-6");
        }
        catch(err){
            console.log(err.message);
        } 
    }
    

    
    // Remove "Delete" and "Insert Below" headers and widen Notes Header
    var bo_headers = bo_container.querySelector("#bo_headers");
    var bo_header_row = bo_headers.querySelector(".row");
    bo_header_row.removeChild(bo_header_row.lastElementChild);
    bo_header_row.removeChild(bo_header_row.lastElementChild);

    var notes_header = bo_container.querySelector("#bo_header_notes");
    notes_header.classList.remove("col-4");
    notes_header.classList.add("col-6");
    
    

    // Hide Action Selector
    var action_selector = document.querySelector(".action_selector");
    action_selector.style.display = "none";

    // Hide Add a Step
    var add_a_step = document.getElementById("add_step");
    add_a_step.style.display = "none";

    // Display Start Editing button
    var start_editing = document.getElementById("start_editing_menu");
    start_editing.style.display = "block";

    // Deselect all bo_units (Removes 'active' class from all bo_units)
    const allDivs = document.querySelectorAll('.bo_unit');
    allDivs.forEach(function(el){
        el.classList.remove('active');
    });

}

function start_editing(){
    var bo_container = document.querySelector('#bo_container');
    
    //Hide Start Editing Button
    var start_editing = document.getElementById("start_editing_menu");
    start_editing.style.display = "none";

    // Add "Delete" and "Insert" headers; make notes header more narrow
    var bo_headers = bo_container.querySelector("#bo_headers");
    var bo_header_row = bo_headers.querySelector(".row");
    
    // Create delete and insert headers and append them
    var div_delete = document.createElement('div');
    div_delete.setAttribute("class", "col-1 bo_header");
    div_delete.setAttribute("id", "bo_header_delete");
    var center_delete = document.createElement('center');
    center_delete.innerHTML = "Delete";
    div_delete.appendChild(center_delete);

    var div_insert = document.createElement('div');
    div_insert.setAttribute("class", "col-1 bo_header");
    div_insert.setAttribute("id", "bo_header_insert");
    var center_insert = document.createElement('center');
    center_insert.innerHTML = "Insert";
    div_insert.appendChild(center_insert);

    bo_header_row.appendChild(div_delete);
    bo_header_row.appendChild(div_insert);

    var notes_header = bo_container.querySelector("#bo_header_notes");
    notes_header.classList.remove("col-6");
    notes_header.classList.add("col-4");
    





    
    // For every bo_unit, display "Delete" and "Insert Below" columns
    var bo_units = bo_container.querySelectorAll('div .bo_unit');
    for(var i = 0; i < bo_units.length; i++){
        var curr_row = bo_units[i].querySelector('.row');
        try{
            // Show delete and insert icons
            var to_display;
            to_display = curr_row.querySelector(".delete");
            to_display.style.display = "block";
            to_display = curr_row.querySelector(".insert");
            to_display.style.display = "block";

            // Make the notes column more narrow to accommodate for insert/delete
            var notes_step = curr_row.querySelector(".note_step");
            notes_step.classList.remove("col-6");
            notes_step.classList.add("col-4");
        }
        catch(err){
            console.log(err.message);
        } 
    }

    

    //Display Add a Step
    var add_a_step = document.getElementById("add_step");
    add_a_step.style.display = "block";

    // Display Action Selector
    var action_selector = document.querySelector(".action_selector");
    action_selector.style.display = "block";
}