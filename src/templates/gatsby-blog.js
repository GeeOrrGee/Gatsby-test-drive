import { graphql } from "gatsby"
import Layout from "../components/layout"
import React from "react"
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>{post.frontmatter.title}</div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
