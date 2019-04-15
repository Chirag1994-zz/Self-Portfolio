
import React from "react"
import { Menu, Segment, ListItem } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import "../styles/style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
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
a = <FontAwesomeIcon color="#243665" size="2x"  title="react" key={i} icon={faReact} />
}else if(i == "faBootstrap"){
  a = <FontAwesomeIcon size="2x" color="#243665" title="bootstrap" key={i} icon={faBootstrap} />
 
}else if(i == "faSemanticUi"){
  a = <FontAwesomeIcon size="2x" color="#243665" title="semantic-ui" key={i} icon={faSemanticUi} />
 
}else if(i == "faRedux"){
  a = <FontAwesomeIcon size="2x" color="#243665"  key={i} icon={faRedux} />
 
}else if(i == "faJava"){
  a = <FontAwesomeIcon size="2x" color="#243665" key={i} icon={faJava} />
 
}else if(i == "faAngular"){
  a = <FontAwesomeIcon size="2x" color="#243665" key={i} icon={faAngular} />
 
}else if(i == "faMysql"){
  a = <FontAwesomeIcon size="2x" color="#243665" key={i} icon={faMysql} />
 
}
else if(i == "faGatsby"){
  a = <img

  src={require("../images/gatsby-icon.png)}
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
            src={require("../images/chirag.jpg")}
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