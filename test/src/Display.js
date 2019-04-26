import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

let ProjectC = styled.div`
  border: 1px solid yellow;
  background-color: green;
  width: 800px;
  text-align: left;
  word-wrap: break-word;
`

let ActionC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
                      <p>project name: <br/> {project.name}</p>
                      <p>project description: <br/> {project.description}</p>
                      {this.state.actions.map( action => {
                        return project.id === action.project_id ? 
                          <ActionC>
                            <p>action #{action.id} description: <br/> {action.description}</p>
                            <p>additional notes: <br/> {action.notes}</p>
                          </ActionC>
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
