import { ingredients, chefs, burguers } from "../db/hamburguer_db";

export default function createId(data) {
    switch (data) {
        case 1:
            if (ingredients) { 
                return ingredients[ingredients.length - 1].id + 1;
            } else { 
                return null;
            }
            break;

        case 2:
            if (chefs) { 
                return chefs[chefs.length - 1].id + 1;
            } else { 
                return null;
            }
            break;

        case 3:
            if (burguers) { 
                return burguers[burguers.length - 1].id + 1;
            } else { 
                return null;
            }
            break;

        default:
            break;
    };
};