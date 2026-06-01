import React from 'react'

export function Head({
  title = "Paul Barnes | Web Developer",
  description,
}: {
  title?: string
  description?: string
}) {

  return (
    <>
      <title>{title}</title>
      {description && <meta name="description" content={description}/>}
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" sizes="32x32" href="/apple-touch-icon.png"/>
      <link rel="icon" sizes="16x16" href="/apple-touch-icon.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
    </>
  )
  
}
