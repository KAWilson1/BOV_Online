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
    var bo_units = bo_container.querySelectorAll('div .bo_unit');
    for(var i = 0; i < bo_units.length; i++){
        var curr_row = bo_units[i].querySelector('.row');
        try{
            var to_delete;
            to_delete = curr_row.querySelector(".delete");
            to_delete.style.display = "none";
            to_delete = curr_row.querySelector(".insert");
            to_delete.style.display = "none";
        }
        catch(err){
            console.log(err.message);
        } 
    }

    /*
    Commented code until decision is made if "Delete" and "Insert" columns are deleted or hidden
    // Remove "Delete" and "Insert Below" headers
    var bo_headers = bo_container.querySelector("#bo_headers");
    var bo_header_row = bo_headers.querySelector(".row");

    // Since "Delete" and "Insert Below" are the last columns,
    // delete the last child in the row twice
    bo_header_row.removeChild(bo_header_row.lastElementChild);
    bo_header_row.removeChild(bo_header_row.lastElementChild);
    */
    

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
    //Hide Start Editing Button
    var start_editing = document.getElementById("start_editing_menu");
    start_editing.style.display = "none";

    
    var bo_container = document.querySelector('#bo_container');
    // For every bo_unit, hide "Delete" and "Insert Below" columns
    var bo_units = bo_container.querySelectorAll('div .bo_unit');
    for(var i = 0; i < bo_units.length; i++){
        var curr_row = bo_units[i].querySelector('.row');
        try{
            var to_delete;
            to_delete = curr_row.querySelector(".delete");
            to_delete.style.display = "block";
            to_delete = curr_row.querySelector(".insert");
            to_delete.style.display = "block";
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