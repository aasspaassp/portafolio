import { useEffect } from "react";
import * as d3 from "https://cdn.skypack.dev/d3@7";

const AnimationD3 = () => {
const ctx = d3.select("body").append("svg").attr("width", 720).attr("height", 360)
 
let circle = ctx.append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple")

  useEffect(()=>{
    circle.remove()
    circle.attr('cx', 50).attr('cy', 50)
  }, [])
}
export default AnimationD3