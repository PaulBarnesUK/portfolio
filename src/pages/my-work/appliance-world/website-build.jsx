import React from 'react'
import Project from '../../../components/project'
import data from '../../../data/pages/js/appliance-world/websiteBuild'
import { Head as DefaultHead } from '../../../layouts/head';

export function Head() {

  return DefaultHead({ title: "Paul Barnes | My Work | Website Build for Appliance World" })

}

const websiteBuild = () => (
    <div>
        <Project
            id={data.projectId}
            client={data.client}
            intro={data.intro}
            content={data.content}
            technologies={data.technologies}
            tags={data.tags}
        />
    </div>
)

export default websiteBuild