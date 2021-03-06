import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  useEffect(() => {
    document.getElementById("title").style.color = "blue"
  })

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1 id="title">Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}
export default IndexPage

const asd = () => {
  useEffect(() => {
    alert("Hey!")
  })

  return (
    <Layout>
      <div id="banners">
        <div>
          <span>640x480</span>
          <img
            src="https://admix.in/wp-content/uploads/2018/08/logoadmix.png"
            alt=""
            width="640"
            height="480"
          />
        </div>

        <div>
          <span>640x360</span>
          <img
            src="https://admix.in/wp-content/uploads/2018/08/logoadmix.png"
            alt=""
            width="640"
            height="360"
          />
        </div>

        <div>
          <span>300x250</span>
          <img
            src="https://admix.in/wp-content/uploads/2018/08/logoadmix.png"
            alt=""
            width="300"
            height="250"
          />
        </div>

        <div>
          <span>320x50</span>
          <img
            src="https://admix.in/wp-content/uploads/2018/08/logoadmix.png"
            alt=""
            width="320"
            height="50"
          />
        </div>

        <div>
          <span>728x90</span>
          <img
            src="https://admix.in/wp-content/uploads/2018/08/logoadmix.png"
            alt=""
            width="728"
            height="90"
          />
        </div>

        <div>
          <span>160x600</span>
          <img
            src="https://admix.in/wp-content/uploads/2018/08/logoadmix.png"
            alt=""
            width="160"
            height="600"
          />
        </div>

        <div>
          <span>300x600</span>
          <img
            src="https://admix.in/wp-content/uploads/2018/08/logoadmix.png"
            alt=""
            width="300"
            height="600"
          />
        </div>

        <div>
          <span>970x250</span>
          <img
            src="https://admix.in/wp-content/uploads/2018/08/logoadmix.png"
            alt=""
            width="970"
            height="250"
          />
        </div>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}
