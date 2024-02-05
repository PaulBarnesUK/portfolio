import React from 'react'
import Project from '../../../components/project'
import data from '../../../data/pages/js/glanbia/body-and-fit'
import { Head as DefaultHead } from '../../../layouts/head';

export function Head() {

  return DefaultHead({ title: "Paul Barnes | My Work | Website Frontend for Body & Fit" })

}

const bodyAndFit = () => (
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

export default bodyAndFit