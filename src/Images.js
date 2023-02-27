import blackpanther from "./images/blackpanther.jpg";
import blackwidow from "./images/blackwidow.jpeg";
import captainAmerica from "./images/captainamerica.jpg";
import colossus from "./images/colossus.jpeg";
import daredevil from "./images/daredevil.jpg";
import deadpool from "./images/deadpool.jpg";
import drstrange from "./images/drstrange.jpg";
import hawkeye from "./images/hawkeye.jpg";
import hulk from "./images/hulk.jpg";
import ironman from "./images/ironman.jpg";
import moonknight from "./images/moonknight.jpg";
import professorX from "./images/professorX.jpg";
import punisher from "./images/punisher.jpg";
import scarletwitch from "./images/scarletwitch.jpeg"
import silversurfer from "./images/silversurfer.jpg";
import spiderman from "./images/spiderman.jpg";
import spiderman2099 from "./images/spiderman2099.jpg";
import thor from "./images/thor.jpg";
import vision from "./images/vision.jpg";
import wolverin from "./images/wolverine.jpg";
import cyclops from "./images/cyclops.jpg"

const imagesArr = [blackpanther, blackwidow, captainAmerica, colossus, spiderman
                    , ironman, daredevil, deadpool, drstrange, hawkeye,
                    hulk, moonknight, professorX, punisher, scarletwitch,
                    silversurfer, spiderman2099, thor, vision, wolverin, cyclops]

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(imagesArr)
export default imagesArr