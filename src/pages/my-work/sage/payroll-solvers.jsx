import React from 'react'
import Project from '../../../components/project'
import data from '../../../data/pages/js/sage/payrollSolvers'

export default () => (
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