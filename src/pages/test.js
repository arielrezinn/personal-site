import React from 'react'
import { Flex } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LinkOpensInNewTab from '../components/buildingBlocks/linkOpensInNewTab'

const TestPage = () => (
  <Layout>
    <SEO title="Test" />
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        width: ['90%', '50%', '50%'],
        maxWidth: '70ch',
        marginTop: 'auto',
        marginBottom: 'auto',
      }}>

      <h1>Web A11y</h1>
      <LinkOpensInNewTab link="https://a11y.coffee/" text="https://a11y.coffee/" /><br />
      <LinkOpensInNewTab link="https://www.a11yproject.com/checklist/" text="https://www.a11yproject.com/checklist/" /><br />
      <LinkOpensInNewTab link="https://www.w3.org/TR/WCAG/" text="https://www.w3.org/TR/WCAG/" /><br />
      <LinkOpensInNewTab link="https://www.a11yproject.com/content-style-guide/" text="https://www.a11yproject.com/content-style-guide/" /><br />
      <LinkOpensInNewTab link="https://a11y-style-guide.com/style-guide/" text="https://a11y-style-guide.com/style-guide/" /><br />
      <LinkOpensInNewTab link="https://psa.arielrezin.com" text="https://psa.arielrezin.com" /><br />
      <LinkOpensInNewTab link="https://webaim.org/blog/target-lawsuit-settled/" text="https://webaim.org/blog/target-lawsuit-settled/" /><br />
      <LinkOpensInNewTab link="https://www.lflegal.com/2019/01/dominos-ninth-circuit/" text="https://www.lflegal.com/2019/01/dominos-ninth-circuit/" /><br />

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis blandit turpis cursus in hac habitasse platea dictumst. Pellentesque elit eget gravida cum sociis natoque. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Pellentesque sit amet porttitor eget. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Mi tempus imperdiet nulla malesuada. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Pharetra vel turpis nunc eget lorem. Magna sit amet purus gravida quis blandit turpis cursus. Leo in vitae turpis massa sed elementum tempus egestas. Cras sed felis eget velit aliquet sagittis id. Aliquam ut porttitor leo a. Porta lorem mollis aliquam ut porttitor leo a. Integer quis auctor elit sed vulputate mi sit amet. Fusce id velit ut tortor pretium viverra suspendisse potenti. Dui sapien eget mi proin.</p>

      <p>Orci sagittis eu volutpat odio facilisis mauris. Et tortor consequat id porta. Faucibus purus in massa tempor nec feugiat nisl pretium. Accumsan tortor posuere ac ut. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Egestas quis ipsum suspendisse ultrices. Duis at consectetur lorem donec massa sapien faucibus. Condimentum lacinia quis vel eros donec. Risus at ultrices mi tempus. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Gravida quis blandit turpis cursus. Dui ut ornare lectus sit amet est. Viverra mauris in aliquam sem. Odio ut sem nulla pharetra diam sit. Malesuada fames ac turpis egestas sed. Placerat in egestas erat imperdiet sed euismod nisi porta. Accumsan tortor posuere ac ut consequat semper viverra. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Purus non enim praesent elementum facilisis leo vel fringilla.</p>

      <p>Dignissim suspendisse in est ante in. Gravida cum sociis natoque penatibus et magnis dis parturient. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Elit ut aliquam purus sit amet luctus. Enim eu turpis egestas pretium aenean pharetra magna. Dolor sit amet consectetur adipiscing. Quis ipsum suspendisse ultrices gravida dictum fusce. In hendrerit gravida rutrum quisque non tellus. Convallis tellus id interdum velit laoreet id donec ultrices. Urna id volutpat lacus laoreet non. Consectetur purus ut faucibus pulvinar elementum integer enim. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Ornare arcu odio ut sem nulla. Consectetur a erat nam at lectus urna duis convallis.</p>

      <p>Morbi quis commodo odio aenean sed. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Viverra ipsum nunc aliquet bibendum. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Diam ut venenatis tellus in metus vulputate eu. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Nullam vehicula ipsum a arcu cursus vitae. Sit amet aliquam id diam. Convallis aenean et tortor at. Lorem ipsum dolor sit amet consectetur. Magna fringilla urna porttitor rhoncus dolor purus non. Aenean sed adipiscing diam donec. Ac auctor augue mauris augue neque gravida in fermentum et. Viverra tellus in hac habitasse platea dictumst. Netus et malesuada fames ac. Eget nunc lobortis mattis aliquam faucibus purus. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Magna sit amet purus gravida quis blandit turpis cursus.</p>

      <p>Faucibus nisl tincidunt eget nullam. Neque volutpat ac tincidunt vitae semper. Accumsan in nisl nisi scelerisque eu ultrices. Neque ornare aenean euismod elementum. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Aliquam ut porttitor leo a diam sollicitudin. Et netus et malesuada fames ac turpis. Turpis nunc eget lorem dolor sed viverra ipsum. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Ac turpis egestas sed tempus urna et. Lacinia at quis risus sed vulputate odio ut enim blandit. At risus viverra adipiscing at in tellus integer. Lacus viverra vitae congue eu consequat ac felis donec et. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Sed arcu non odio euismod lacinia at quis.</p>

      <p>Pellentesque adipiscing commodo elit at. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Orci dapibus ultrices in iaculis nunc sed augue. Elit at imperdiet dui accumsan sit amet nulla facilisi. Risus sed vulputate odio ut enim blandit. Egestas integer eget aliquet nibh praesent tristique magna sit. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Leo vel orci porta non pulvinar neque. Proin fermentum leo vel orci porta non pulvinar. Nullam eget felis eget nunc. Pellentesque habitant morbi tristique senectus et netus et. Id donec ultrices tincidunt arcu non sodales. Sem et tortor consequat id porta nibh venenatis cras. Ornare quam viverra orci sagittis eu volutpat. Dui ut ornare lectus sit amet est placerat in egestas. Nisl nunc mi ipsum faucibus vitae aliquet.</p>

      <p>Dui faucibus in ornare quam. In aliquam sem fringilla ut morbi. Volutpat blandit aliquam etiam erat velit scelerisque. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Vitae congue mauris rhoncus aenean. Egestas pretium aenean pharetra magna ac. Orci phasellus egestas tellus rutrum tellus. At tempor commodo ullamcorper a lacus. Mattis rhoncus urna neque viverra justo. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Molestie at elementum eu facilisis sed odio morbi quis commodo. Commodo elit at imperdiet dui. Convallis aenean et tortor at risus viverra adipiscing. Malesuada pellentesque elit eget gravida cum sociis natoque. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Sed vulputate mi sit amet mauris. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Elit sed vulputate mi sit.</p>

      <p>Lacinia quis vel eros donec ac. Pulvinar sapien et ligula ullamcorper malesuada proin. Ultricies lacus sed turpis tincidunt id aliquet risus. Viverra adipiscing at in tellus integer feugiat scelerisque. Eget nullam non nisi est sit amet facilisis magna. Venenatis cras sed felis eget. Tellus at urna condimentum mattis pellentesque id nibh tortor. Adipiscing enim eu turpis egestas pretium. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Id velit ut tortor pretium viverra. Eros donec ac odio tempor. Augue neque gravida in fermentum. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Adipiscing elit ut aliquam purus sit amet luctus. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Volutpat est velit egestas dui id ornare arcu odio ut. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices.</p>

      <p>Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Posuere ac ut consequat semper viverra nam. Risus quis varius quam quisque. Neque ornare aenean euismod elementum nisi. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Purus semper eget duis at tellus at urna condimentum. Donec ultrices tincidunt arcu non. Pulvinar proin gravida hendrerit lectus a. Cras tincidunt lobortis feugiat vivamus at. Tellus id interdum velit laoreet id donec. Mus mauris vitae ultricies leo integer malesuada nunc. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Arcu odio ut sem nulla pharetra diam sit amet nisl. Nulla at volutpat diam ut venenatis.</p>

      <p>Risus quis varius quam quisque id diam vel. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Cursus euismod quis viverra nibh cras. Et malesuada fames ac turpis egestas sed. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Id volutpat lacus laoreet non curabitur gravida arcu. Commodo odio aenean sed adipiscing diam donec. Viverra justo nec ultrices dui sapien eget mi proin. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Tempor orci dapibus ultrices in iaculis nunc sed. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Quis vel eros donec ac odio tempor. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Eget lorem dolor sed viverra ipsum nunc. Sapien nec sagittis aliquam malesuada.</p>

    </Flex>
  </Layout >
)

export default TestPage
