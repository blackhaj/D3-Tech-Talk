async function createTree() {

  // Import our data
  let data = await d3.json('./data.js')
  
  // Convert it into a D3 friendly data structure
  let root = d3.hierarchy(data);

  // Tell D3 we want a tree of 1000px width and 1000px height
  let treeLayout = d3.tree().size([1000, 1000]);
  
  // Add the coordinates to our data so it makes a tree
  treeLayout(root);
  

  // Add the circle nodes
  function addNodes(){
    // Grab the g with class of nodes (to store our nodes)
    d3.select('svg g.nodes')
      .selectAll('circle.node') // select ALL circle objects with 'nodes' as class (there are none)
      .data(root.descendants()) // attach the data to this 'selection'
      .enter() // as there are no nodes we will make them using enter (and attach the data)
      .append('circle') // for each data point, create a circle object
      .classed('node', true) // add class of 'node' to each of them
      .attr('cx', function (d) { // set its x coordinate (horizontal axis)
        return d.x;
      })
      .attr('cy', function (d) { // set its y coordinate (verticle)
        return d.y;
      })
      .attr('r', 7) // set radius of the circle (it's size)
  }
  addNodes()
  

  // Add the links between nodes (source ---> target)
  function addLinks () {
    d3.select('svg g.links') // select the g object with class 'links'
      .selectAll('line.link') // select all the line objects with class link (there aren't any)
      .data(root.links()) // attach the links data
      .enter() // as there are no links we will make them using enter (and attach the data)
      .append('line') // create a line object for each data point
      .classed('link', true) // set the class to 'link'
      .attr('x1', function (d) { // set the 'source' x and y coordinates
        return d.source.x;
      })
      .attr('y1', function (d) {
        return d.source.y;
      })
      .attr('x2', function (d) { // set the 'target' x and y coordinates
        return d.target.x;
      }) 
      .attr('y2', function (d) {
        return d.target.y;
      });
  }
  addLinks()
  


  // Add text labels to nodes
  function addTextLabels(){
    d3.selectAll('svg g.labels')
      .selectAll('text.label')
      .data(root.descendants())
      .enter()
      .append('text')
      .classed('label', true)
      .style('text-anchor', 'middle')
      .style('fill', 'white')
      .text((d) => d.data.name)
      .attr('x', (d) => d.x)
      .attr('y', (d) => d.y - 10);
  }
  addTextLabels()



  // Do something when clicking a node
  function addClickListeners(){
    d3.selectAll('circle.node')
      .on('click', function(d){
        alert(d.data.name)
      })
  }
  addClickListeners()
}

createTree()




