const colors = [
    "white",
    "light_gray",
    "gray",
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "cyan",
    "light_blue",
    "blue",
    "purple",
    "magenta",
    "pink"
];

ServerEvents.tags('item', event => {
    for (let color of colors) {
        let dyes = event.get(`c:dyes/${color}`).getObjectIds()
        dyes.forEach(dye => {
            event.add(`c:${color}_dyes`, dye)
        })
    }
})

ServerEvents.recipes(event => {
    event.remove({ output: "alloyed:forge" })

    event.remove({ output: "createaddition:alternator" })
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": true,
        "category": "misc",
        "key": {
            "A": {
                "item": "create:andesite_alloy"
            },
            "B": {
                "item": "simulated:engine_assembly",
            },
            "C": {
                "item": "createaddition:capacitor"
            },
            "I": {
                "tag": "c:plates/iron"
            },
            "R": {
                "item": "alloyed:steel_casing"
            },
            "S": {
                "item": "createaddition:copper_spool"
            }
        },
        "pattern": [
            "  A  ",
            " IBI ",
            "ISRSI",
            " ICI "
        ],
        "result": {
            "count": 1,
            "id": "createaddition:alternator"
        }
    })

    event.remove({ output: "createaddition:electric_motor" })
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": true,
        "category": "misc",
        "key": {
            "A": {
                "item": "create:andesite_alloy"
            },
            "B": {
                "item": "simulated:engine_assembly",
            },
            "C": {
                "item": "createaddition:capacitor"
            },
            "I": {
                "tag": "c:plates/brass"
            },
            "R": {
                "item": "alloyed:steel_casing"
            },
            "S": {
                "item": "createaddition:copper_spool"
            }
        },
        "pattern": [
            "  A  ",
            " IBI ",
            "ISRSI",
            " ICI "
        ],
        "result": {
            "count": 1,
            "id": "createaddition:electric_motor"
        }
    })

    event.remove({ output: "createaddition:modular_accumulator" })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "redstone",
        "key": {
            "B": {
                "item": "alloyed:bronze_casing"
            },
            "C": {
                "item": "createaddition:capacitor"
            },
            "R": {
                "tag": "c:rods/copper"
            },
            "W": {
                "tag": "c:wires/electrum"
            }
        },
        "pattern": [
            " R ",
            "CBC",
            " W "
        ],
        "result": {
            "count": 1,
            "id": "createaddition:modular_accumulator"
        }
    })

    event.remove({ output: "createaddition:portable_energy_interface" })
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "redstone",
        "ingredients": [
            {
                "item": "alloyed:bronze_casing"
            },
            {
                "item": "create:chute"
            },
            {
                "item": "createaddition:copper_spool"
            }
        ],
        "result": {
            "count": 1,
            "id": "createaddition:portable_energy_interface"
        }
    })

    event.remove({ output: "alloyed:steel_ingot", type: "create:mixing" })
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
                "item": "minecraft:iron_ingot"
            },
            {
                "item": "minecraft:iron_ingot"
            },
            {
                "item": "minecraft:iron_ingot"
            },
            [
                {
                    "item": "minecraft:coal"
                },
                {
                    "item": "minecraft:charcoal"
                }
            ]
        ],
        "results": [
            {
                "count": 3,
                "id": "alloyed:steel_ingot"
            }
        ],
        "fabric:load_conditions": [
            {
                "condition": "fabric:all_mods_loaded",
                "values": [
                    "create"
                ]
            }
        ],
        "neoforge:conditions": [
            {
                "type": "neoforge:mod_loaded",
                "modid": "create"
            }
        ]
    })

    event.remove({ output: "aeronautics:adjustable_burner" })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": {
                "item": "create:andesite_alloy"
            },
            "B": {
                "item": "createlowheated:basic_burner",
            },
            "C": {
                "tag": "aeronautics:burner_fire"
            },
            "R": {
                "item": "minecraft:redstone"
            },
            "S": {
                "item": "create:iron_sheet"
            }
        },
        "pattern": [
            "SBS",
            "SCS",
            "ARA"
        ],
        "result": {
            "count": 1,
            "id": "aeronautics:adjustable_burner"
        }
    })

    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "redstone",
        "ingredients": [
            {
                "item": "minecraft:dried_kelp_block"
            },
            {
                "tag": "minecraft:wooden_slabs"
            }
        ],
        "result": {
            "count": 1,
            "id": "interiors:kelp_seat"
        }
    })

    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "redstone",
        "ingredients": [
            {
                "tag": "minecraft:wooden_slabs"
            },
            {
                "tag": "minecraft:wooden_slabs"
            },
            {
                "item": "minecraft:dried_kelp_block"
            }
        ],
        "result": {
            "count": 1,
            "id": "interiors:kelp_floor_chair"
        }
    })

    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "redstone",
        "ingredients": [
            {
                "tag": "minecraft:wooden_slabs"
            },
            {
                "tag": "minecraft:planks"
            },
            {
                "item": "minecraft:dried_kelp_block"
            }
        ],
        "result": {
            "count": 1,
            "id": "interiors:kelp_chair"
        }
    })

    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "redstone",
        "ingredients": [
            {
                "tag": "minecraft:wooden_slabs"
            },
            {
                "item": "interiors:kelp_seat"
            },
        ],
        "result": {
            "count": 1,
            "id": "interiors:kelp_floor_chair"
        }
    })

    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "redstone",
        "ingredients": [
            {
                "tag": "minecraft:planks"
            },
            {
                "item": "interiors:kelp_seat"
            },
        ],
        "result": {
            "count": 1,
            "id": "interiors:kelp_chair"
        }
    })

    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "redstone",
        "ingredients": [
            {
                "tag": "minecraft:wooden_slabs"
            },
            {
                "item": "interiors:kelp_floor_chair"
            },
        ],
        "result": {
            "count": 1,
            "id": "interiors:kelp_chair"
        }
    })

})