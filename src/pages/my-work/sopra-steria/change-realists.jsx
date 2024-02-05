import React from 'react'
import Project from '../../../components/project'
import data from '../../../data/pages/js/sopra-steria/changeRealists'
import { Head as DefaultHead } from '../../../layouts/head'

export function Head() {

  return DefaultHead({ title: "Paul Barnes | My Work | Change Realists for Sopra Steria" })

}

const changeRealists = () => (
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

export default changeRealists