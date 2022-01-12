import React from 'react';

/**
 * 1) Create new Bus component which should have:
 *      -The information regarding the ${on}, number of persons on the bus, (and show it to the user).
 *      -The information regarding the ${cap}, the full capacity of the bus iself (excluding the driver), (and show it to the user).
 *      -Four received props, the ${currentStop}, the function to update the currentStop ${setCurrentStop}, the array of stops ${stops} and a function that will update the number of passengers left on each bus stop #{setLeftovers}.
 *      -A function that will look at the ${stops} position of the array given the ${currentStop} and check if given the ${on} and ${cap} how many can you fit on the bus and how many are leftovers (and set the leftovers ${setLeftovers}).
 *      -A useEffect that for each change on the ${currentStop} will call the function.
 */
export default function Bus(
    {
        /**We need to listen to some props that are being passed by our Route ${currentStop}, ${setCurrentStop}, ${stops} and ${setLeftovers}*/
    }
) {
    //Set the ${on} useState
    //Set the ${cap} useState

    //useEffect that will be dispatched when the currentStop changes
    //the function which will check how many will be added to the bus and how many are going to be leftovers
    //BONUS EXERCISE: Also usually some passengers get out of the bus at each stop, lets make it random between 1 and 3

    return <>{/*Render the current number of people on the bus, the capacity of the bus, and how many were leftovers*/}</>;
}
