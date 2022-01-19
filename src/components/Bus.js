import React from 'react';

/**
 * 1) Create new Bus component which should have:
 *      -The information regarding the ${on}, number of persons on the bus, (and show it to the user).
 *      -The information regarding the ${cap}, the full capacity of the bus iself (excluding the driver), (and show it to the user).
 *      -Three received props, the array of stops ${stops}, a function that will update the number of passengers left on each bus stop #{setLeftovers} and the ${leftovers} themselves.
 *      -A function that will look at the ${stops} last element and check if given the ${on} and ${cap} how many can you fit on the bus and how many are leftovers (and set the leftovers ${setLeftovers}).
 *      -A useEffect that for each change on the ${stops} will call the function.
 */
export default function Bus(
    {
        /**We need to listen to some props that are being passed by our Route ${stops}, ${setLeftovers} and ${leftovers}*/
    }
) {
    //Set the ${on} useState
    //Set the ${cap} useState

    //useEffect that will be dispatched when the stops changes

    //the function which will check how many will be added to the bus and how many are going to be leftovers
    function canBoard(passengersWaiting) {}

    return <>{/*Render the current stop, how many people were in each stop, how many people are on the bus, the capacity of the bus, and how many were leftovers*/}</>;
}
