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
                    <h3 className="panel__title">
                        {stack.title}
                    </h3>
                    <h4 className="panel__subTitle">
                        {stack.languages.title}
                    </h4>
                    <div className="panel__list">
                        {languages}
                    </div>
                    <h4 className="panel__subTitle">
                        {stack.frameworks.title}
                    </h4>
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