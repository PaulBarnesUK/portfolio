import React from 'react'
import Project from '../../../components/project'
import data from '../../../data/pages/js/appliance-world/priceSpider'
import { Head as DefaultHead } from '../../../layouts/head';

export function Head() {

  return DefaultHead({ title: "Paul Barnes | My Work | Price Spider for Appliance World" })

}

const priceSpider = () => (
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

export default priceSpider