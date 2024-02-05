import React from 'react'
import RecentWork from '../components/recentWork'
import Layout from '../layouts'
import { Head as DefaultHead } from '../layouts/head';

// Data
import projects from '../data/projects'

export function Head() {

  return DefaultHead({ title: "Paul Barnes | My Work" })

}

class MyWorkPage extends React.Component {
    render() {
        return (
            <Layout>
                <RecentWork title="Some of my work..." projects={projects.filter(project => !project.hide)} fade={true} />
            </Layout>
        )
    }
}

export default MyWorkPage