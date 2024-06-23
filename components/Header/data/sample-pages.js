import imgAPI from '~/public/images/imgAPI';
import link from '~/public/text/link';

const sample = [
  {
    id: 'company',
    name: 'company',
    thumb: imgAPI.ui[3],
    child: [
      {
        name: 'about',
        link: link.fintech.about
      },
      {
        name: 'team',
        link: link.fintech.team
      },
      {
        name: 'blog',
        link: link.fintech.blog
      },
      {
        name: 'blog detail',
        link: link.fintech.blogDetail
      }
    ],
  },
  {
    id: 'form',
    name: 'Form',
    thumb: imgAPI.ui[1],
    child: [
      {
        name: 'login',
        link: link.fintech.login
      },
      {
        name: 'register',
        link: link.fintech.register
      },
      {
        name: 'contact',
        link: link.fintech.contact
      },
      {
        name: 'contact map',
        link: link.fintech.contactMap
      }
    ],
  },
  {
    id: 'items',
    name: 'items',
    thumb: imgAPI.ui[0],
    child: [
      {
        name: 'card',
        link: link.fintech.card
      },
      {
        name: 'product',
        link: link.fintech.product
      },
      {
        name: 'product detail',
        link: link.fintech.productDetail
      }
    ],
  },
  {
    id: 'utilities',
    name: 'utilities',
    thumb: imgAPI.ui[2],
    child: [
      {
        name: 'pricing',
        link: link.fintech.pricing
      },
      {
        name: 'faq',
        link: link.fintech.faq
      },
      {
        name: 'maintenance',
        link: link.fintech.maintenance
      },
      {
        name: 'coming soon',
        link: link.fintech.comingSoon
      },
      {
        name: 'error',
        link: '/error'
      }
    ]
  }
];

export default sample;
