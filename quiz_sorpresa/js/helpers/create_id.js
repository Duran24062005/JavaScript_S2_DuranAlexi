import { ingredients, chefs, burguers } from "../db/hamburguer_db.js";

export default function createId(data) {
    switch (data) {
        case 1:
            if (ingredients) { 
                return ingredients[ingredients.length - 1].id + 1;
            } else { 
                return 1;
            }
            break;

        case 2:
            if (chefs) { 
                return chefs[chefs.length - 1].id + 1;
            } else { 
                return 1;
            }
            break;

        case 3:
            if (burguers) { 
                return burguers[burguers.length - 1].id + 1;
            } else { 
                return 1;
            }
            break;

        default:
            break;
    };
};