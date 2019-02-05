import React from 'react'
import RecentWork from '../components/recentWork'

// Data
import projects from '../data/projects'

class MyWorkPage extends React.Component {
    render() {
        return (
            <RecentWork title="Some of my work..." projects={projects.filter(project => !project.hide)} fade={true} />
        )
    }
}

export default MyWorkPage