/* @flow */
import React from 'react'
import {
  Button,
  Tabs,
  Tab
} from 'react-bootstrap'

export class HomeView extends React.Component {
  render () {
    return (
      <div>
        <h1>Skillz</h1>

        <Tabs defaultActiveKey={1}>
          <Tab eventKey={1} title='Tab 1'>
            <Button
              bsStyle='primary'
              style={{
                fontWeight: 'bold',
                textTransform: 'uppercase'
              }}
            >
              Primary
            </Button>
          </Tab>
          <Tab eventKey={2} title='Tab 2'>Tab 2 content</Tab>
          <Tab eventKey={3} title='Tab 3'>Tab 3 content</Tab>
        </Tabs>
      </div>
    )
  }
}

export default HomeView
