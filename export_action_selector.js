// START HERE: Having bug where firefox crashes if too many steps

function export_action_selector(){
    // Pull the Trigger, Actions and Notes from each Build Order (bo) step
    // Actions is a list of image names (no path)
    var bo_container = document.getElementById('bo_container');
    var bo_steps = bo_container.querySelectorAll('.bo_unit');

    serialized_bo_steps = [];
    var i = 0;
    for(i=0;i<bo_steps.length;i++){
        var bo_row = bo_steps[i].querySelector(".row")
        var trigger = bo_row.querySelector(".trigger").querySelector("p");
        var actions = bo_row.querySelector(".action").querySelectorAll("img");
        var notes = bo_row.querySelector(".notes").querySelector("p");

        serialized_actions = [];
        var i = 0;
        for(i = 0; i < actions.length; i++){
            // Remove the path from the file and only record the filename and extension
            serialized_actions.push(actions[i].src.split("/")[actions[i].src.split("/").length - 1]);
        }


        to_store_bo_step = [trigger.innerHTML, serialized_actions, notes.innerHTML] //TODO: fix .innerHTML vulnerability
        serialized_bo_steps.push(to_store_bo_step);
    }
    console.log(serialized_bo_steps); 
}