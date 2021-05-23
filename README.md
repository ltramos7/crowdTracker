# Crowd Tracker

### Description

The Crowd Tracker application allows a user to find the degrees of separtion between two individuals.

The application is built using Vanilla JavaScript to create basic classes for Nodes and Graphs.

I would like to add JavaScript modules to separte the the user data from the breadth first search responsibilites.

I would also like to create grammatically correct results dependent on the number of seperation degrees(i.e. "Separted by one degree" vs "Separated by two degrees")

The project is initialized with five users and four connections. Currently, a connection search is done between `userOne` and `userFive`. 

### Prerequisites
- nodejs 15.7.0


### Project Install
- Clone the repository: `git clone https://github.com/ltramos7/crowdTracker`
- cd into `crowdTracker`

### Run Application
- run `node index.js`

- Experiment with different results by changing the arguments of `breadthFirstSearch` on line 120. Current users are labled `userOne`, `userTwo`, `userThree`, `userFour`, and `userFive`.
