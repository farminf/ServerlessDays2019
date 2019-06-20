// example theme.js
import { dark as theme } from 'mdx-deck/themes'

export default {
  ...theme,
  // font: 'Futura, sans-serif',
  h1: {
    // textTransform: 'uppercase',
    fontWeight: 700
  },

  img: {
    maxWidth: '100%'
  },
  li: {
    paddingBottom: '20px',
  },
  ul: {
    
    listStyle: 'none',
    paddingLeft: '20px',
    display: 'inline-block',
  },
  // colors: {
  //   text: '#6AD798',
  //   background: 'rgb(1, 22, 39)',
  //   link: '#fff',
  //   pre: '#fff',
  //   preBackground: '#051626',
  //   code: '#fff'
  // }
}
