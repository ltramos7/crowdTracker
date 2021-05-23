// Functionality for connections, adjacencies, and travesal recrods. 

class Node {
  constructor(value){
    this.value = value
    this.edgesList = []
  }

  connect(node){
    this.edgesList.push(node)
    node.edgesList.push(this)
  }

  getAdjacentNodes(){
    return this.edgesList.map(edge => edge.value.firstName) 
  }

  isConnected(node){
    return this.edgesList.map(edge => edge.value).indexOf(node.value) > -1
  }
}

class Graph {
  constructor(nodes){
    this.nodes = [...nodes]
  }

  addToGraph(node){
    this.nodes.push(node)
  }

  recontructPath(visitedNodes, startNode, endNode){
    let currentNode = endNode
    const shortestPath = []

    while(currentNode !== null){
      shortestPath.push(currentNode)
      currentNode = visitedNodes[currentNode.value.firstName]
    }
    // return "Met"
    return `There are ${shortestPath.length -1 } degrees of separation between ${startNode.value.firstName} and ${endNode.value.firstName}`
  }

  breadthFirstSearch(start, end){
    const queue = [start]
    const visitedNodes = {}
    visitedNodes[start.value.firstName] = null

    while(queue.length > 0){
      const node = queue.shift()

      if(node.value.firstName === end.value.firstName){
        // console.log("Found it")
        this.recontructPath(visitedNodes, start, end)
      }

      for(const adjacency of node.edgesList){
        if(!visitedNodes.hasOwnProperty(adjacency.value.firstName)){
          visitedNodes[adjacency.value.firstName] = node
          queue.push(adjacency)
        }
      }
    }
  }
}

//seeded data for users
const imgUrl = "https://korayozkal.medium.com/how-to-setup-image-urls-on-your-rails-api-render-them-on-your-javascript-front-end-in-10-steps-3b88ada30508"

const userOne = new Node(
  {
      firstName: "Jane",
      lastName: "Smite", 
      profileImage: imgUrl,
      location: "Colorado"
  }
)

const userTwo = new Node(
  {
      firstName: "Michael",
      lastName: "Haves",
      profileImage: imgUrl,
      location: "Illinois" 
  }
)

const userThree = new Node(
  {
    firstName: "Molly",
    lastName: "Manriquez",
    profileImage: imgUrl,
    location: "California"
  }
)

const userFour = new Node(
  {
    firstName: "Jim",
    lastName: "Zed",
    profileImage: imgUrl,
    location: "Washington"
  }
)

const userFive = new Node(
  {
    firstName: "Daya",
    lastName: "Williams",
    profileImage: imgUrl,
    location: "New Mexico"
  }
)

const graph = new Graph([userOne, userTwo, userThree, userFour])

userOne.connect(userTwo)
userTwo.connect(userFour)
userFour.connect(userThree)
userFour.connect(userFive)

graph.breadthFirstSearch(userOne, userFive)
