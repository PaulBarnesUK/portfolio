import React from 'react'
import stacksData from '../data/stack.js'

const Stack = () => {
    const stacks = stacksData.map((stack, index) => {
        const languages = stack.languages.list.map((language, index) => {
            return (
                <div className="panel__listItem" key={index}>
                    {language}
                </div>
            )
        })

        const frameworks = stack.frameworks.list.map((framework, index) => {
            return (
                <div className="panel__listItem" key={index}>
                    {framework}
                </div>
            )
        })

        return (
            <div className="panel" key={index}>
                <div className="panel__wrapper">
                    <div className="panel__icon" dangerouslySetInnerHTML={stack.icon}>
                    </div>
                    <div className="panel__title">
                        {stack.title}
                    </div>
                    <div className="panel__subTitle">
                        {stack.languages.title}
                    </div>
                    <div className="panel__list">
                        {languages}
                    </div>
                    <div className="panel__subTitle">
                        {stack.frameworks.title}
                    </div>
                    <div className="panel__list">
                        {frameworks}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="stack">
            <div className="container">
                <div className="row">
                    {stacks}
                </div>
            </div>
        </div>
    )
}

export default Stack