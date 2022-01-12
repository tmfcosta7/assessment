import React from 'react';
import Bus from './Bus';

/**
 * 2) Create the Route component which should have:
 *   -An Array (that starts empty) stating the number os passengers that were waiting at the stop (useState) ${stops}.
 *   -A number value stating the number os passengers left on the bus stop (useState) ${leftovers}.
 *   -A counter that stores the current stop, and a function to alter it (useState).
 *   -A setInterval function registered that at each 10 seconds (and unregisters the setInterval when 5 stops is reached), it adds a a new stop to the Array with a randomizer value of passangers between 1 and 15, while also updating the value of the next stop (useEffect).
 *   -Render the Bus component sending the current stop prop, the array of stops and the function to update the number of passengers left on each bus stop.
 */
export default function Route({}) {
    //Set the ${stops} useState -> This array should start empty
    //Set the ${currentStop} useState
    //Set the ${leftovers} useState

    //useEffect when the  component starts, set the interval runing (remember to stop the setInterval when 5 stops are reached)
    //you will probably need to use setInterval and Math.random (if you don't know it, try to search for it).

    return (
        <>
            {/**Some props are needed here, ${stops}, ${currentStop}, ${setCurrentStop} and ${setLeftovers} (care here, what should be done, send the default setLeftovers  or create a new one) */}
            <Bus />
        </>
    );
}
