import React from 'react'
import RecentWork from '../components/recentWork'

// Data
import projects from '../data/projects'

class MyWorkPage extends React.Component {
    render() {
        return (
            <RecentWork title="My Work" projects={projects} fade={true} />
        )
    }
}

export default MyWorkPage