function write_to_grid(grid_population){
    if(grid_population.length < 32){
        // Append empty images until length is 32 
        diff = 32 - grid_population.length;
        i = 0;
        for(i = 0; i < diff; i++){
            grid_population.push("empty.png");
        }
    }

    grid_0_0 = document.querySelector("#action_selector_grid_0_0");
    grid_0_0.src = "./icons/" + grid_population[0];
    grid_1_0 = document.querySelector("#action_selector_grid_1_0");
    grid_1_0.src = "./icons/" + grid_population[1];
    grid_2_0 = document.querySelector("#action_selector_grid_2_0");
    grid_2_0.src = "./icons/" + grid_population[2];
    grid_3_0 = document.querySelector("#action_selector_grid_3_0");
    grid_3_0.src = "./icons/" + grid_population[3];
    grid_4_0 = document.querySelector("#action_selector_grid_4_0");
    grid_4_0.src = "./icons/" + grid_population[4];
    grid_5_0 = document.querySelector("#action_selector_grid_5_0");
    grid_5_0.src = "./icons/" + grid_population[5];
    grid_6_0 = document.querySelector("#action_selector_grid_6_0");
    grid_6_0.src = "./icons/" + grid_population[6];
    grid_7_0 = document.querySelector("#action_selector_grid_7_0");
    grid_7_0.src = "./icons/" + grid_population[7];

    grid_0_1 = document.querySelector("#action_selector_grid_0_1");
    grid_0_1.src = "./icons/" + grid_population[8];
    grid_1_1 = document.querySelector("#action_selector_grid_1_1");
    grid_1_1.src = "./icons/" + grid_population[9];
    grid_2_1 = document.querySelector("#action_selector_grid_2_1");
    grid_2_1.src = "./icons/" + grid_population[10];
    grid_3_1 = document.querySelector("#action_selector_grid_3_1");
    grid_3_1.src = "./icons/" + grid_population[11];
    grid_4_1 = document.querySelector("#action_selector_grid_4_1");
    grid_4_1.src = "./icons/" + grid_population[12];
    grid_5_1 = document.querySelector("#action_selector_grid_5_1");
    grid_5_1.src = "./icons/" + grid_population[13];
    grid_6_1 = document.querySelector("#action_selector_grid_6_1");
    grid_6_1.src = "./icons/" + grid_population[14];
    grid_7_1 = document.querySelector("#action_selector_grid_7_1");
    grid_7_1.src = "./icons/" + grid_population[15];

    grid_0_2 = document.querySelector("#action_selector_grid_0_2");
    grid_0_2.src = "./icons/" + grid_population[16];
    grid_1_2 = document.querySelector("#action_selector_grid_1_2");
    grid_1_2.src = "./icons/" + grid_population[17];
    grid_2_2 = document.querySelector("#action_selector_grid_2_2");
    grid_2_2.src = "./icons/" + grid_population[18];
    grid_3_2 = document.querySelector("#action_selector_grid_3_2");
    grid_3_2.src = "./icons/" + grid_population[19];
    grid_4_2 = document.querySelector("#action_selector_grid_4_2");
    grid_4_2.src = "./icons/" + grid_population[20];
    grid_5_2 = document.querySelector("#action_selector_grid_5_2");
    grid_5_2.src = "./icons/" + grid_population[21];
    grid_6_2 = document.querySelector("#action_selector_grid_6_2");
    grid_6_2.src = "./icons/" + grid_population[22];
    grid_7_2 = document.querySelector("#action_selector_grid_7_2");
    grid_7_2.src = "./icons/" + grid_population[23];

    grid_0_3 = document.querySelector("#action_selector_grid_0_3");
    grid_0_3.src = "./icons/" + grid_population[24];
    grid_1_3 = document.querySelector("#action_selector_grid_1_3");
    grid_1_3.src = "./icons/" + grid_population[25];
    grid_2_3 = document.querySelector("#action_selector_grid_2_3");
    grid_2_3.src = "./icons/" + grid_population[26];
    grid_3_3 = document.querySelector("#action_selector_grid_3_3");
    grid_3_3.src = "./icons/" + grid_population[27];
    grid_4_3 = document.querySelector("#action_selector_grid_4_3");
    grid_4_3.src = "./icons/" + grid_population[28];
    grid_5_3 = document.querySelector("#action_selector_grid_5_3");
    grid_5_3.src = "./icons/" + grid_population[29];
    grid_6_3 = document.querySelector("#action_selector_grid_6_3");
    grid_6_3.src = "./icons/" + grid_population[30];
    grid_7_3 = document.querySelector("#action_selector_grid_7_3");
    grid_7_3.src = "./icons/" + grid_population[31];
}

function set_action_category(grid_type){
    // grid_type can be "structure", "unit", "upgrade", "misc"
    var race_ele = document.querySelector('#bo_race').textContent; // BO metadata at top of page
    grid_population = [] // Determines what will display in Action Selector
    if (race_ele == "Race: Terran"){
        if (grid_type == "structure"){
            grid_population = [
                        "supply_depot.png", "command_center.png", "refinery.png", "engineering_bay.png",
                        "sensor_tower.png", "missile_turret.png", "bunker.png", "empty.png",
                        "barracks.png", "factory.png", "ghost_academy.png", "starport.png",
                        "armory.png", "fusion_core.png", "empty.png", "empty.png",
                        "tech_lab.png", "reactor.png", "orbital_command.png", "planetary_fortress.png"
                    ];
        }else if (grid_type == "unit"){
            grid_population = [
                            "scv.png", "mule.png", "marine.png", "reaper.png", "marauder.png", "ghost.png",
                            "hellion.png", "hellbat.png", "widow_mine.png", "siege_tank.png", "cyclone.png", 
                            "thor.png", "viking.png", "medivac.png", "liberator.png", "raven.png", 
                            "battlecruiser.png", "banshee.png"
                        ];
        }else if (grid_type == "upgrade"){
            grid_population = [
                "infantry_weapons_level_one.gif", "infantry_weapons_level_two.gif",
                "infantry_weapons_level_three.gif", "vehicle_weapons_level_one.gif",
                "vehicle_weapons_level_two.gif", "vehicle_weapons_level_three.gif",
                "ship_weapons_level_one.gif", "ship_weapons_level_two.gif", 
                "ship_weapons_level_three.gif", "infantry_armor_level_one.gif",
                "infantry_armor_level_two.gif", "infantry_armor_level_three.gif",
                "vehicle_and_ship_plating_level_one.gif", "vehicle_and_ship_plating_level_two.gif",
                "vehicle_and_ship_plating_level_three.gif", "hyperflight_rotors.jpg",
                "rapid_reignition_system.jpg", "smart_servos.png", 
                "advanced_ballistics.jpg", "enhanced_shockwaves.png", "hi_sec_auto_tracking.gif",
                "mag_field_accelerator.jpg", "cloak.png", "concussive_shells.png", 
                "stimpack.png", "weapon_refit.png", "drilling_claws.png", 
                "corvid_reactor.gif", "combat_shield.png", "infernal_pre_igniter.jpg",
                "neosteel_armor.gif"
            ];
        }else if (grid_type == "misc"){
            grid_population = ["scout.png"];
        }
    }else if (race_ele == "Race: Zerg"){
        if (grid_type == "structure"){
            grid_population = [
                "hatchery.png","extractor.png","spawning_pool.png","evolution_chamber.png",
                "roach_warren.png","baneling_nest.png","spine_crawler.png","spore_crawler.png", "lair.png",
                "hydralisk_den.png","lurker_den.png","spire.png","infestation_pit.png","nydus_network.png",
                "nydus_worm.png", "hive.png","greater_spire.png","ultralisk_cavern.png"
            ];
            }else if (grid_type == "unit"){
            grid_population = [
                "drone.png","overlord.png","queen.png","empty.png","empty.png","empty.png",
                "empty.png","empty.png", "zergling.png","baneling.png","roach.png","ravager.png","hydralisk.png",
                "lurker.png","mutalisk.png","corruptor.png", "overseer.png","droperlord.png","swarm_host.png",
                "infestor.png","viper.png","ultralisk.png","brood_lord.png"
            ];
            }else if (grid_type == "upgrade"){
            grid_population = [
                "melee_attacks_level_one.gif", "missile_attacks_level_one.gif", 
                "ground_carapace_level_one.gif", "metabolic_boost.gif", "pneumatized_carapace.gif",
                "burrow.png", "melee_attacks_level_two.gif", "missile_attacks_level_two.gif",
                "ground_carapace_level_two.gif", "flyer_attacks_level_one.gif", "flyer_carapace_level_one.gif",
                "flyer_attacks_level_two.gif", "flyer_carapace_level_two.gif", "centrifugal_hooks.gif",
                "glial_reconstitution.gif", "tunneling_claws.gif", "grooved_spines.png",
                "muscular_augments.png", "pathogen_glands.gif", "neural_parasite.png",
                "melee_attacks_level_three.gif", "missile_attacks_level_three.gif",
                "ground_carapace_level_three.gif", "flyer_attacks_level_three.gif",
                "flyer_carapace_level_three.gif", "chitinous_plating.gif", "anabolic_synthesis.gif",
                "adrenal_glands.gif", "adaptive_talons.png", "seismic_spines.png"
            ];
        }else if (grid_type == "misc"){
            grid_population = ["scout.png", "inject.png", "creep.png"];
        }
    }else{ //protoss
        if(grid_type == "structure"){
            grid_population = [
                "nexus.png", "assimilator.png", "pylon.png", "gateway.png", "forge.png", 
                "cybernetics_core.png", "photon_cannon.png", "stargate.png", "robotics_facility.png", 
                "twilight_council.png", "shield_battery.png", "fleet_beacon.png", "robotics_bay.png",
                "templar_archives.png", "dark_shrine.png"
            ];
        }else if(grid_type=="unit"){
            grid_population = [
                "probe.png", "zealot.png", "adept.png", "sentry.png", "stalker.png",
                "dark_templar.png", "high_templar.png", "archon.png", "warp_prism.png", 
                "observer.png", "immortal.png", "colossus.png", "disruptor.png", 
                "phoenix.png", "void_ray.png", "oracle.png", "carrier.png",
                "tempest.png", "mothership.png"
            ];
        }else if(grid_type == "upgrade"){
            grid_population = [
                "ground_weapons_level_one.gif", "ground_weapons_level_two.gif",
                "ground_weapons_level_three.gif", "air_weapons_level_one.gif", 
                "air_weapons_level_two.gif", "air_weapons_level_three.gif",
                "ground_armor_level_one.gif", "ground_armor_level_two.gif", 
                "ground_armor_level_three.gif", "air_armor_level_one.gif", 
                "air_armor_level_two.gif", "air_armor_level_three.gif",
                "shields_level_one.gif", "shields_level_two.gif", 
                "shields_level_three.gif", "charge.png", "gravatic_boosters.gif",
                "gravitic_drive.gif", "flux_vanes.png", "resonating_glaives.jpg",
                "anion_pulse_crystals.png", "extended_thermal_lance.gif",
                "psionic_storm.png", "blink.png", "shadow_stride.png", 
                "warp_gate.gif", "tectonic_destabilizers.png"
            ];
        }else if(grid_type == "misc"){
            grid_population = ["scout.png"];
        }   
    }
    write_to_grid(grid_population);
}