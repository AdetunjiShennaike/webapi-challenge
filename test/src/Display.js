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
        actions: res.data.action
      })
    })
    .catch( err => {
      console.log(err);
    })

    axios.get('http://localhost:4000/api/projects')
    .then( res => {
      console.log('data', res)
      this.setState({
        projects: res.data.project
      })
    })
    .catch( err => {
      console.log(err);
    })
  }

  render(){
    return(
      <div>
          {this.state.projects.map( project => {
            return  <ProjectC>
                      <p>project name: {project.name}</p>
                      <p>project description: {project.description}</p>
                      {this.state.actions.map( action => {
                        return project.id === action.project_id ? 
                          <div>
                            <p>action #{action.id} description: {action.description}</p>
                            <p>additional notes: {action.notes}</p>
                          </div>
                        :
                          console.log('empty')
                      })}
                    </ProjectC>
          })}
      </div>
    )
  }
}

export default Display
