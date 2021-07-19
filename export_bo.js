function export_bo(){
    /*
        Deletes "Delete" and "Insert Below" Headers
        Deletes "Delete" and "Insert Below" sections within bo_units
    */
    var bo_container = document.querySelector('#bo_container');

    // For every bo_unit, delete "Delete" and "Insert Below" columns
    var bo_units = bo_container.querySelectorAll('div .bo_unit');
    for(var i = 0; i < bo_units.length; i++){
        var curr_row = bo_units[i].querySelector('.row');
        try{
            var to_delete;
            to_delete = curr_row.querySelector(".delete");
            to_delete.remove();
            to_delete = curr_row.querySelector(".insert");
            to_delete.remove();
        }
        catch(err){
            console.log(err.message);
        } 
    }

    // Remove "Delete" and "Insert Below" headers
    var bo_headers = bo_container.querySelector("#bo_headers");
    var bo_header_row = bo_headers.querySelector(".row");
    // Since "Delete" and "Insert Below" are the last columns,
    // delete the last child in the row twice
    bo_header_row.removeChild(bo_header_row.lastElementChild);
    bo_header_row.removeChild(bo_header_row.lastElementChild);

    // Hide Action Selector
    var action_selector = document.querySelector(".action_selector");
    action_selector.style.display = "none";


}