import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div class="container is-fluid" style={{ marginBottom: `80px`}}>
        <div class="content is-large">
            <h1>Hello World</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
        </div>
    </div>

    <div class="container is-fluid" style={{ marginBottom: `80px`}}>
        <div class="columns">
            <div class="column">
                <div class="has-background-primary has-text-centered has-text-white">
                    1
                </div>
            </div>
            <div class="column is-primary has-text-centered">
                <div class="has-background-primary has-text-centered has-text-white">
                    2
                </div>        
            </div>
            <div class="column is-primary has-text-centered">
                <div class="has-background-primary has-text-centered has-text-white">
                    3
                </div>         
            </div>
            <div class="column is-primary has-text-centered">
                <div class="has-background-primary has-text-centered has-text-white">
                    4
                </div>         
            </div>
        </div>
    </div>

    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
