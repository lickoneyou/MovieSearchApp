import { Breadcrumbs, Anchor } from '@mantine/core'

function Bredcr({ page, filmTitle, filmPath }) {
  const items = [
    { title: page.crumbs, href: page.path },
    { title: filmTitle, href: filmPath },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ))

  return <Breadcrumbs>{items}</Breadcrumbs>
}

export default Bredcr
