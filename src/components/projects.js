
import React from "react"
import { Menu, Segment, ListItem } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import "../styles/style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import {StaticQuery, graphql} from "gatsby"

import {
  faAngular,
  faSemanticUi,
  faRedux,
  faMysql,
  faBootstrap,
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
  faPinterest,
  faJava,
  faReact
} from "@fortawesome/free-brands-svg-icons"


const Projects =({children}) => (

  <StaticQuery 
  query = {graphql`
  query ProjectsQuery {
    allProjectsJson {
      edges {
        node {
          header
          techs
          description
          icon
        }
      }
    }
  }
  `}
    render = {data =>(
       
<>
<Segment raised>
            <section id="first-page">
              <div className="ui stackable three column grid centered">


              {getProjects(data)}
                
                
              </div>
            </section>
          </Segment>
          </>
    )}

/>);

function getIcons (data) {
const iconArray =[]
var a =" "
data.forEach(i =>{
if(i =="faReact"){
a = <FontAwesomeIcon color="#663399" size="2x"  title="react" key={i} icon={faReact} />
}else if(i == "faBootstrap"){
  a = <FontAwesomeIcon size="2x" color="#663399" title="bootstrap" key={i} icon={faBootstrap} />
 
}else if(i == "faSemanticUi"){
  a = <img
  title="semantic ui react"
  width="32"
src={require("../images/logo.png")}
/>
 
}else if(i == "faRedux"){
  a = <img
  width="32"
  title="redux"
  src={require("../images/ricon.jpg")}
/>
 
}else if(i == "faJava"){
  a = <FontAwesomeIcon size="2x" color="#663399" title="java" key={i} icon={faJava} />
 
}else if(i == "faAngular"){
  a = <FontAwesomeIcon size="2x" color="#663399" key={i} icon={faAngular}  title="angular js" />
 
}else if(i == "faMysql"){
  a = <img
  width="32"
  title="mysql"
  src={require("../images/micon.png")}
/>
 
}
else if(i == "faGatsby"){
  a = <img
       width="32"
       title="gatsbyjs"
       src={require("../images/gatsby-icon.png")}
/>
 
}
else if(i == "faGrapghQl"){
  a = <img
       width="32"
       title="graphql"
       src={require("../images/gicon.png")}
/>
 
}


iconArray.push(
   
  a
   )
})

return iconArray
}

function getProjects(data){
  const projectsArray =[]; 
  data.allProjectsJson.edges.forEach(item => {
    projectsArray.push(<div key={item.node.header} className="column">
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <img
            className="right floated huge ui image"
            src={require('"' +item.node.icon + '"')}
          />
          <div className="header">{item.node.header}
         
          
          </div>
          

<div className="meta lh-1">
{getIcons(item.node.techs)}

          </div>
          <div className="description cl-black">
           <h4> {item.node.description}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>)
  
  });
  return projectsArray;
}
export default Projects