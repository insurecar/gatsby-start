import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the about page</h1>
    <p className="mt-10">Welcome to about</p>
    <Link to="/">Go back to the about</Link>
  </Layout>
)

export default About
