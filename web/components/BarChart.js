import React, { Component } from 'react'
import * as d3 from 'd3';

class BarChart extends Component {
  constructor(props){
    super(props)
    this.createBarChart = this.createBarChart.bind(this)
  }

  componentDidMount() {
    this.createBarChart()
  }
  componentDidUpdate() {
    this.createBarChart()
  }

  createBarChart() {
    const node = this.node
    const W = 700,
          H = 100,
          BAR_W = 20,
          BAR_PADDING = 1,
          W_PADDING = 25,
          H_PADDING = 10
          
//         x = d3.scaleLinear()
//             .domain([0, 10])
//             .range([margin, width - margin]),
//         y = d3.scaleLinear()
//             .domain([0, 10])
//             .range([height - margin, margin]);

//         d3.range(10).map(function(i){
//             return {x: i, y: Math.sin(i) + 5};
//         })

//     var line = d3.line()
//             .x(function(d){return x(d.x);})
//             .y(function(d){return y(d.y);});

    const svg = d3.select(node)
                .append("svg")
                .attr("width", W)
                .attr("height", H)

     svg.selectAll("rect")
       .data(this.props.data)
       .enter()
       .append("rect")
       .attr("x", function(d, i) {
         return i * (BAR_W + 1) + W_PADDING
       })
       .attr("height", 0)
       .attr("y", H + H_PADDING)
       .transition()  // アニメーションする
       .duration(500)
       .attr("y", function(d, i) {
         return H - d[1] * 10 + H_PADDING
       })
       .delay(function(d, i) {
         return i * 50;
       })
       .attr("width", BAR_W)
       .attr("height", function(d) {
         return d[1] * 10
       })
       .attr("style", "fill:turquoise")
            
     
     svg.selectAll("text")
       .data(this.props.data)
       .enter()
       .append("text")
       .text(function(d) {
         return d[1]
       })
       .attr("text-anchor", "middle")
       .attr("x", function(d, i) {
         return i * (BAR_W + 1) + 10 + W_PADDING
       })
       .attr("y", function(d, i) {
         return H - d[1] * 10 + 15 + H_PADDING
       })
       .attr("font-size", "10px")
       .attr("fill", "white")
     
     svg.append("rect")
       .attr("width", W - W_PADDING)
       .attr("height", 1)
       .attr("x", W_PADDING)
       .attr("y", H + H_PADDING);

     // テキスト
     svg.selectAll(".x_text")
       .data(dataset)
       .enter()
       .append("text")
       .attr("class", "x_text")
       .attr("x", function(d, i) {
         return i * (BAR_W + BAR_PADDING) + 10 + W_PADDING;
       })
       .attr("y", H + H_PADDING + 3)
       .text(function(d, i) {
         return d[0];
       });
   }
     
//     renderAxes(svg);

//     function renderAxes(svg){
//         var xAxis = d3.axisBottom()
//                 .scale(x.range([0, quadrantWidth()]))
//                 .scale(x); 

//         var yAxis = d3.axisLeft()
//                 .scale(y.range([quadrantHeight(), 0]))
//                 .scale(y);

//         svg.append("g")        
//             .attr("class", "axis")
//             .attr("transform", function(){
//                 return "translate(" + xStart() 
//                     + "," + yStart() + ")";
//             })
//             .call(xAxis);

//         svg.append("g")        
//             .attr("class", "axis")
//             .attr("transform", function(){
//                 return "translate(" + xStart() 
//                     + "," + yEnd() + ")";
//            })
//             .call(yAxis);
//     }

//     function xStart(){ return margin;}        
//     function yStart(){ return height - margin;}
//     function xEnd(){ return width - margin;}
//     function yEnd(){ return margin;}
//     function quadrantWidth(){ return width - 2 * margin;}
//     function quadrantHeight(){ return height - 2 * margin;} 
//   }

  render() {
    return <svg ref={node => this.node = node}>
    </svg>
  }
}

export default BarChart