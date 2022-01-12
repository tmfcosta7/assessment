import logo from './logo.svg';
import './App.css';
import Route from './components/Route';

/**
 *  The Story:
 * Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
 *
 * Task Overview:
 * You have to write a function that accepts three parameters:
 *
 * ${cap} is the amount of people the bus can hold excluding the driver.
 * ${on} is the number of people on the bus excluding the driver.
 *
 * Your Tasks are:
 * 1) Create new Bus component which should have:
 *      -The information regarding the ${on}, number of persons on the bus, (and show it to the user).
 *      -The information regarding the ${cap}, the full capacity of the bus iself (excluding the driver), (and show it to the user).
 *      -Three received props, the ${currentStop}, the array of stops ${stops} and a function that will update the number of passengers left on each bus stop #{setLeftovers}.
 *      -A function that will look at the ${stops} position of the array given the ${currentStop} and check if given the ${on} and ${cap} how many can you fit on the bus and how many are leftovers (and set the leftovers ${setLeftovers}).
 *      -A useEffect that for each change on the ${currentStop} will call the function.
 * 2) Create the Route component which should have:
 *      -An Array (that starts empty) stating the number os passengers that were waiting at the stop (useState).
 *      -An Array (that starts empty) stating the number os passengers left on the bus stop (useState).
 *      -A counter that stores the current stop, and a function to alter it (useState).
 *      -A setInterval function registered that at each 10 seconds (and unregisters the setInterval when 5 stops is reached), it adds a a new stop to the Array with a randomizer value of passangers between 1 and 15, while also updating the value of the next stop (useEffect).
 *      -Render the Bus component sending the current stop prop, the array of stops and the function to update the number of passengers left on each bus stop.
 *
 * @returns
 */

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
                <Route />
            </header>
        </div>
    );
}

export default App;
