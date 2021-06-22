
function set_grid_to_blank(){
    grid_0_0 = document.querySelector("#action_selector_grid_0_0");
    grid_0_0.src = "./icons/empty.png";
    grid_1_0 = document.querySelector("#action_selector_grid_1_0");
    grid_1_0.src = "./icons/empty.png";
    grid_2_0 = document.querySelector("#action_selector_grid_2_0");
    grid_2_0.src = "./icons/empty.png";
    grid_3_0 = document.querySelector("#action_selector_grid_3_0");
    grid_3_0.src = "./icons/empty.png";
    grid_4_0 = document.querySelector("#action_selector_grid_4_0");
    grid_4_0.src = "./icons/empty.png";
    grid_5_0 = document.querySelector("#action_selector_grid_5_0");
    grid_5_0.src = "./icons/empty.png";
    grid_6_0 = document.querySelector("#action_selector_grid_6_0");
    grid_6_0.src = "./icons/empty.png";
    grid_7_0 = document.querySelector("#action_selector_grid_7_0");
    grid_7_0.src = "./icons/empty.png";

    grid_0_1 = document.querySelector("#action_selector_grid_0_1");
    grid_0_1.src = "./icons/empty.png";
    grid_1_1 = document.querySelector("#action_selector_grid_1_1");
    grid_1_1.src = "./icons/empty.png";
    grid_2_1 = document.querySelector("#action_selector_grid_2_1");
    grid_2_1.src = "./icons/empty.png";
    grid_3_1 = document.querySelector("#action_selector_grid_3_1");
    grid_3_1.src = "./icons/empty.png";
    grid_4_1 = document.querySelector("#action_selector_grid_4_1");
    grid_4_1.src = "./icons/empty.png";
    grid_5_1 = document.querySelector("#action_selector_grid_5_1");
    grid_5_1.src = "./icons/empty.png";
    grid_6_1 = document.querySelector("#action_selector_grid_6_1");
    grid_6_1.src = "./icons/empty.png";
    grid_7_1 = document.querySelector("#action_selector_grid_7_1");
    grid_7_1.src = "./icons/empty.png";

    grid_0_2 = document.querySelector("#action_selector_grid_0_2");
    grid_0_2.src = "./icons/empty.png";
    grid_1_2 = document.querySelector("#action_selector_grid_1_2");
    grid_1_2.src = "./icons/empty.png";
    grid_2_2 = document.querySelector("#action_selector_grid_2_2");
    grid_2_2.src = "./icons/empty.png";
    grid_3_2 = document.querySelector("#action_selector_grid_3_2");
    grid_3_2.src = "./icons/empty.png";
    grid_4_2 = document.querySelector("#action_selector_grid_4_2");
    grid_4_2.src = "./icons/empty.png";
    grid_5_2 = document.querySelector("#action_selector_grid_5_2");
    grid_5_2.src = "./icons/empty.png";
    grid_6_2 = document.querySelector("#action_selector_grid_6_2");
    grid_6_2.src = "./icons/empty.png";
    grid_7_2 = document.querySelector("#action_selector_grid_7_2");
    grid_7_2.src = "./icons/empty.png";

    grid_0_3 = document.querySelector("#action_selector_grid_0_3");
    grid_0_3.src = "./icons/empty.png";
    grid_1_3 = document.querySelector("#action_selector_grid_1_3");
    grid_1_3.src = "./icons/empty.png";
    grid_2_3 = document.querySelector("#action_selector_grid_2_3");
    grid_2_3.src = "./icons/empty.png";
    grid_3_3 = document.querySelector("#action_selector_grid_3_3");
    grid_3_3.src = "./icons/empty.png";
    grid_4_3 = document.querySelector("#action_selector_grid_4_3");
    grid_4_3.src = "./icons/empty.png";
    grid_5_3 = document.querySelector("#action_selector_grid_5_3");
    grid_5_3.src = "./icons/empty.png";
    grid_6_3 = document.querySelector("#action_selector_grid_6_3");
    grid_6_3.src = "./icons/empty.png";
    grid_7_3 = document.querySelector("#action_selector_grid_7_3");
    grid_7_3.src = "./icons/empty.png";
}

function set_action_category(grid_type){
    // grid_type can be "structure", "unit", "upgrade", "misc"
    var race_ele = document.querySelector('#bo_race').textContent; // BO metadata at top of page

    // Reset the grid before writing to it
    set_grid_to_blank();

    console.log(race_ele);

    if (race_ele == "Race: Terran"){


    }else if (race_ele == "Race: Zerg"){
        if (grid_type == "structure"){
            grid_0_0 = document.querySelector("#action_selector_grid_0_0");
            grid_0_0.src = "./icons/hatchery.png";
            grid_1_0 = document.querySelector("#action_selector_grid_1_0");
            grid_1_0.src = "./icons/extractor.png";
            grid_2_0 = document.querySelector("#action_selector_grid_2_0");
            grid_2_0.src = "./icons/spawning_pool.png";
            grid_3_0 = document.querySelector("#action_selector_grid_3_0");
            grid_3_0.src = "./icons/evolution_chamber.png";
            grid_4_0 = document.querySelector("#action_selector_grid_4_0");
            grid_4_0.src = "./icons/roach_warren.png";
            grid_5_0 = document.querySelector("#action_selector_grid_5_0");
            grid_5_0.src = "./icons/baneling_nest.png";
            grid_6_0 = document.querySelector("#action_selector_grid_6_0");
            grid_6_0.src = "./icons/spine_crawler.png";
            grid_7_0 = document.querySelector("#action_selector_grid_7_0");
            grid_7_0.src = "./icons/spore_crawler.png";

            grid_0_1 = document.querySelector("#action_selector_grid_0_1");
            grid_0_1.src = "./icons/lair.png";
            grid_1_1 = document.querySelector("#action_selector_grid_1_1");
            grid_1_1.src = "./icons/hydralisk_den.png";
            grid_2_1 = document.querySelector("#action_selector_grid_2_1");
            grid_2_1.src = "./icons/lurker_den.png";
            grid_3_1 = document.querySelector("#action_selector_grid_3_1");
            grid_3_1.src = "./icons/spire.png";
            grid_4_1 = document.querySelector("#action_selector_grid_4_1");
            grid_4_1.src = "./icons/infestation_pit.png";
            grid_5_1 = document.querySelector("#action_selector_grid_5_1");
            grid_5_1.src = "./icons/nydus_network.png";
            grid_6_1 = document.querySelector("#action_selector_grid_6_1");
            grid_6_1.src = "./icons/nydus_worm.png";

            grid_0_2 = document.querySelector("#action_selector_grid_0_2");
            grid_0_2.src = "./icons/hive.png";
            grid_1_2 = document.querySelector("#action_selector_grid_1_2");
            grid_1_2.src = "./icons/greater_spire.png";
            grid_2_2 = document.querySelector("#action_selector_grid_2_2");
            grid_2_2.src = "./icons/ultralisk_cavern.png";
            
        }else if (grid_type == "unit"){
            grid_0_0 = document.querySelector("#action_selector_grid_0_0");
            grid_0_0.src = "./icons/drone.png";
            grid_1_0 = document.querySelector("#action_selector_grid_1_0");
            grid_1_0.src = "./icons/overlord.png";
            grid_2_0 = document.querySelector("#action_selector_grid_2_0");
            grid_2_0.src = "./icons/queen.png";
            grid_3_0 = document.querySelector("#action_selector_grid_3_0");
            grid_3_0.src = "./icons/empty.png";
            grid_4_0 = document.querySelector("#action_selector_grid_4_0");
            grid_4_0.src = "./icons/empty.png";
            grid_5_0 = document.querySelector("#action_selector_grid_5_0");
            grid_5_0.src = "./icons/empty.png";
            grid_6_0 = document.querySelector("#action_selector_grid_6_0");
            grid_6_0.src = "./icons/empty.png";
            grid_7_0 = document.querySelector("#action_selector_grid_7_0");
            grid_7_0.src = "./icons/empty.png";

            grid_0_1 = document.querySelector("#action_selector_grid_0_1");
            grid_0_1.src = "./icons/zergling.png";
            grid_1_1 = document.querySelector("#action_selector_grid_1_1");
            grid_1_1.src = "./icons/baneling.png";
            grid_2_1 = document.querySelector("#action_selector_grid_2_1");
            grid_2_1.src = "./icons/roach.png";
            grid_3_1 = document.querySelector("#action_selector_grid_3_1");
            grid_3_1.src = "./icons/ravager.png";
            grid_4_1 = document.querySelector("#action_selector_grid_4_1");
            grid_4_1.src = "./icons/hydralisk.png";
            grid_5_1 = document.querySelector("#action_selector_grid_5_1");
            grid_5_1.src = "./icons/lurker.png";
            grid_6_1 = document.querySelector("#action_selector_grid_6_1");
            grid_6_1.src = "./icons/mutalisk.png";
            grid_7_1 = document.querySelector("#action_selector_grid_7_1");
            grid_7_1.src = "./icons/corruptor.png";

            grid_0_2 = document.querySelector("#action_selector_grid_0_2");
            grid_0_2.src = "./icons/overseer.png";
            grid_1_2 = document.querySelector("#action_selector_grid_1_2");
            grid_1_2.src = "./icons/droperlord.png";
            grid_2_2 = document.querySelector("#action_selector_grid_2_2");
            grid_2_2.src = "./icons/swarm_host.png";
            grid_3_2 = document.querySelector("#action_selector_grid_3_2");
            grid_3_2.src = "./icons/infestor.png";
            grid_4_2 = document.querySelector("#action_selector_grid_4_2");
            grid_4_2.src = "./icons/viper.png";
            grid_5_2 = document.querySelector("#action_selector_grid_5_2");
            grid_5_2.src = "./icons/ultralisk.png";
            grid_6_2 = document.querySelector("#action_selector_grid_6_2");
            grid_6_2.src = "./icons/brood_lord.png";



        }else if (grid_type == "upgrade"){
            grid_0_0 = document.querySelector("#action_selector_grid_0_0");
            grid_0_0.src = "./icons/melee_attacks_level_one.gif";
            grid_1_0 = document.querySelector("#action_selector_grid_1_0");
            grid_1_0.src = "./icons/missile_attacks_level_one.gif";
            grid_2_0 = document.querySelector("#action_selector_grid_2_0");
            grid_2_0.src = "./icons/ground_carapace_level_one.gif";
            grid_3_0 = document.querySelector("#action_selector_grid_3_0");
            grid_3_0.src = "./icons/metabolic_boost.gif";
            grid_4_0 = document.querySelector("#action_selector_grid_4_0");
            grid_4_0.src = "./icons/pneumatized_carapace.gif";
            grid_5_0 = document.querySelector("#action_selector_grid_5_0");
            grid_5_0.src = "./icons/burrow.gif";
            grid_6_0 = document.querySelector("#action_selector_grid_6_0");
            grid_6_0.src = "./icons/melee_attacks_level_two.gif";
            grid_7_0 = document.querySelector("#action_selector_grid_7_0");
            grid_7_0.src = "./icons/missile_attacks_level_two.gif";

            grid_0_1 = document.querySelector("#action_selector_grid_0_1");
            grid_0_1.src = "./icons/ground_carapace_level_two.gif";
            grid_1_1 = document.querySelector("#action_selector_grid_1_1");
            grid_1_1.src = "./icons/flyer_attacks_level_one.gif";
            grid_2_1 = document.querySelector("#action_selector_grid_2_1");
            grid_2_1.src = "./icons/flyer_carapace_level_one.gif";
            grid_3_1 = document.querySelector("#action_selector_grid_3_1");
            grid_3_1.src = "./icons/flyer_attacks_level_two.gif";
            grid_4_1 = document.querySelector("#action_selector_grid_4_1");
            grid_4_1.src = "./icons/flyer_carapace_level_two.gif";
            grid_5_1 = document.querySelector("#action_selector_grid_5_1");
            grid_5_1.src = "./icons/centrifugal_hooks.gif";
            grid_6_1 = document.querySelector("#action_selector_grid_6_1");
            grid_6_1.src = "./icons/glial_reconstitution.gif";
            grid_7_1 = document.querySelector("#action_selector_grid_7_1");
            grid_7_1.src = "./icons/tunneling_claws.gif";

            grid_0_2 = document.querySelector("#action_selector_grid_0_2");
            grid_0_2.src = "./icons/grooved_spines.png";
            grid_1_2 = document.querySelector("#action_selector_grid_1_2");
            grid_1_2.src = "./icons/muscular_augments.png";
            grid_2_2 = document.querySelector("#action_selector_grid_2_2");
            grid_2_2.src = "./icons/pathogen_glands.gif";
            grid_3_2 = document.querySelector("#action_selector_grid_3_2");
            grid_3_2.src = "./icons/neural_parasite.png";
            grid_4_2 = document.querySelector("#action_selector_grid_4_2");
            grid_4_2.src = "./icons/melee_attacks_level_three.gif";
            grid_5_2 = document.querySelector("#action_selector_grid_5_2");
            grid_5_2.src = "./icons/missile_attacks_level_three.gif";
            grid_6_2 = document.querySelector("#action_selector_grid_6_2");
            grid_6_2.src = "./icons/ground_carapace_level_three.gif";
            grid_7_2 = document.querySelector("#action_selector_grid_7_2");
            grid_7_2.src = "./icons/flyer_attacks_level_three.gif";

            grid_0_3 = document.querySelector("#action_selector_grid_0_3");
            grid_0_3.src = "./icons/flyer_carapace_level_three.gif";
            grid_1_3 = document.querySelector("#action_selector_grid_1_3");
            grid_1_3.src = "./icons/chitinous_plating.gif";
            grid_2_3 = document.querySelector("#action_selector_grid_2_3");
            grid_2_3.src = "./icons/anabolic_synthesis.gif";
            grid_3_3 = document.querySelector("#action_selector_grid_3_3");
            grid_3_3.src = "./icons/adrenal_glands.gif";
            grid_4_3 = document.querySelector("#action_selector_grid_4_3");
            grid_4_3.src = "./icons/adaptive_talons.png";
            grid_5_3 = document.querySelector("#action_selector_grid_5_3");
            grid_5_3.src = "./icons/seismic_spines.png";
        }else if (grid_type == "misc"){
            grid_0_0 = document.querySelector("#action_selector_grid_0_0");
            grid_0_0.src = "./icons/scout.png";
            grid_1_0 = document.querySelector("#action_selector_grid_1_0");
            grid_1_0.src = "./icons/inject.png";
            grid_2_0 = document.querySelector("#action_selector_grid_2_0");
            grid_2_0.src = "./icons/creep.png";
        }
        
       
        

    }else{ //protoss

    }
}