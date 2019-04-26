import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

let ProjectC = styled.div`
  border: 1px solid yellow;
  background-color: green;
`

class Display extends React.Component {
  constructor(){
    super()
    this.state = {
      projects: [],
      actions: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/actions')
    .then( res => {
      console.log('data', res)
      this.setState({
        actions: res.data
      })
    })
    .catch( err => {
      console.log(err);
    })

    axios.get('http://localhost:4000/api/projects')
    .then( res => {
      console.log('data', res)
      this.setState({
        projects: res.data
      })
    })
    .catch( err => {
      console.log(err);
    })
  }

  render(){
    return(
      <ProjectC>
        {this.state.projects.forEach( project => {
          return  <div>
                    <p>project name: {project.name}</p>
                    <p>project description: {project.description}</p>
                  </div>
          && 
            this.state.actions.map( action => {
              if(project.id === action.project_id) {
                <div>
                  <p>action #{action.id} description: {action.description}</p>
                  <p>additional notes: {action.notes}</p>
                </div>
              }
            })
        })}
      </ProjectC>
    )
  }
}

export default Display
