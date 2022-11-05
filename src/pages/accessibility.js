/** @jsx jsx */
import { Flex, jsx } from 'theme-ui'
import Layout from "../components/layout"
import SEO from "../components/seo"

const A11yPage = () => (
  <Layout>
    <SEO title="Accessibility" />
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: ['90%', '50%', '50%'],
        marginTop: 'auto',
        marginBottom: 'auto'
      }}>
      <h1 sx={{ marginY: '10px' }}>Accessibility</h1>
      {/* <h2 sx={{ marginY: '10px' }}>(A11y)</h2> */}
      <span role='region' sx={{ textAlign: 'center' }}>
        <p>
          I make every effort to make this site accessible and adhere to WCAG 2.1 AA standards.
          That said, I&apos;m still learning! If you find anything that isn&apos;t accessible, please reach out.
        </p>
      </span>
    </Flex>
  </Layout >
)

export default A11yPage
