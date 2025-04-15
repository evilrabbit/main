'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  console.log('Home component is rendering')

  const currentYear = new Date().getFullYear()
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  const expertise = [
    {
      company: 'Vercel',
      role: 'Founding Designer, Head of Design',
      period: '2016-2024'
    },
    {
      company: 'Auth0',
      role: 'Product Designer',
      period: '2015-2016'
    },
    {
      company: 'Aerolab',
      role: 'Product Designer',
      period: '2014-2015'
    },
    {
      company: 'Viacom',
      role: 'Head of Design (Latin America)',
      period: '2010-2014'
    },
    {
      company: 'Identidad',
      role: 'Designer',
      period: '2006-2010'
    },
    {
      company: 'TSYA',
      role: 'Designer',
      period: '2006-2008'
    },
    {
      company: 'Freelance',
      role: 'Designer',
      period: '1998-2006'
    }
  ]

  const media = [
    { 
      type: 'image', 
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Auth0-ZbTIJW8HpChOc63CAGFk37xZecgT0d.png', 
      caption: {
        year: '2015',
        project: '"Auth0 Guardian" iOS Mobile App'
      }
    },
    {
      type: 'group',
      items: [
        { 
          type: 'image', 
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZEIT%20Keyboard-LYTRpUq0Ngb0rLL1mAXPS4ZwqAX9Vd.jpeg',
        },
        { 
          type: 'image', 
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZEIT%20Keyboatd%202.jpg-Vbf6Wkxs6aQZU15LPvcnnPxvIMQ6uG.jpeg',
        }
      ],
      caption: {
        year: '2018',
        project: 'ZEIT Keyboard (in collab with Rama Works)'
      }
    },
    { 
      type: 'image', 
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Now-desktop-2D9g3xr25Y5Fh944pZ7BOkTBvoVLZO.png', 
      caption: {
        year: '2018',
        project: '"Now" macOS Desktop App'
      }
    },
    { 
      type: 'image', 
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mdx-671NVkYzk112EiESM0wHHlNiKa40Ww.png', 
      caption: {
        year: '2018',
        project: '"MDX" Logotype Design'
      }
    },
    { 
      type: 'video', 
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01-WCk0E0BIzQEV5VZS8678m4xXPTkz8h.mp4', 
      caption: {
        year: '2019',
        project: '"ZEIT to Vercel" Rebranding'
      }
    },
    { 
      type: 'image', 
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZEIT%20-%20Dashshboard-bGz1ewqQQuHShlT4AI9f9Wo6iOZ3AH.jpeg', 
      caption: {
        year: '2019',
        project: '"Vercel Dashboard" Mobile Design'
      }
    },
    {
      type: 'group',
      items: [
        {
          type: 'video',
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NextjsConf1-KIWXmKnFYlD1bt9HDocmnzTTPkz9E3.mp4',
        },
        { 
          type: 'image', 
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-0FZE1yxPgKYKUvqdV9CRvfuNOiacBc.png',
        },
        { 
          type: 'image', 
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09-UsZCFIlbXjiGEHaY14eYEIeyRhPYGi.png',
        },
        { 
          type: 'image', 
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Conf-vector-MSAWjnq65M9HPKuFcDIOFGtNQ0izde.png',
        },
        { 
          type: 'image', 
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/08-YWCh6HycJ5wgWKuN4f8jL99N1X1nUI.png',
        }
      ],
      caption: {
        year: '2022',
        project: '"Next.js Conf" Design + Direction'
      }
    },
    {
      type: 'image',
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-18%20at%203.22.12%E2%80%AFPM-c2XbspPGfwiU4UMrYCWwgNLvjQSILP.png',
      caption: {
        year: '2022',
        project: '"Vercel Dashboard" Desktop Design'
      }
    },
    {
      type: 'group',
      items: [
        {
          type: 'video',
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Geist%20video%202-4eMuQOhEngEAtDcojhQbRxDdoYxz35.mp4',
        },
        {
          type: 'video',
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Geist%20video-hj28jOp5TIgF2ppf3G57lZZ7yGOgFw.mp4',
        },
        { 
          type: 'image', 
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Geist%20Page-WW91iEfa0hWuTQYPGOBvPFjjkCMuH3.png', 
        },
      ],
      caption: {
        year: '2023',
        project: '"Geist Font" Creative Direction'
      }
    },
    { 
      type: 'image', 
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NPM%20AI%20Campaign-x9MmfQjGZBfFPdU2VbvNzp1kFytyjb.jpeg', 
      caption: {
        year: '2023',
        project: '"▲ ~/ npm i ai" Billboard Campaign'
      }
    },
    {
      type: 'image',
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%20-%20What%20will%20you%20ship%202%20-%20Billboard-CFp5xtVz4Bolnu7oTyeEsDxKJ12G2e.jpeg',
      caption: {
        year: '2024',
        project: '"What will you ship" Billboard Campaign'
      }
    },
    {
      type: 'group',
      items: [
        { 
          type: 'image', 
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NextjsConf2024-2-LP6tzL7RqEUcppubIqSgBifU3c6Kas.jpeg',
        },
        { 
          type: 'image', 
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nextjs%20Conf%202024-dn7I0lgfKr2OVLupzTvblBQ7m7zewS.jpeg',
        },
        { 
          type: 'image', 
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Next.js%20Conf%202024%20award-Pz6Kq6o2jtrIWaR81ckcX1bXgvZmSE.jpeg',
        },
        {
          type: 'video',
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf%202024%20website-7IF3dXKHAjrP44rGhLR50tq1Vx0qd8.mp4',
        },
        {
          type: 'video',
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Next.js%20Lanyard-0WuOpEEyLgupe7YG6Bl1MRAKaMe3Hu.mp4',
        }
      ],
      caption: {
        year: '2024',
        project: '"Next.js Conf" Creative Direction'
      }
    },
    {
      type: 'group',
      items: [
        {
          type: 'video',
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-B2ZCyfDdcqB3AisTV0UckUzI3u18Nd.mp4',
        },
        {
          type: 'video',
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ship%202-rehaChte5crqmkj5f0kxTszQSzxB2N.mp4',
        },
        {
          type: 'video',
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ship3-GtutL3aJroRwYFhZ1g5sur2cvs0vZC.mp4',
        },
        {
          type: 'image',
          src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Remera%20Ship%20Style-V1BnZYxnKHowUWWq7Lmp437FCUDQRV.jpeg',
        }
      ],
      caption: {
        year: '2024',
        project: '"Vercel Ship" Creative Direction'
      }
    },
    { 
      type: 'image', 
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI-Night-d5AzW5k7Tf9PgOa3kFSYgDFBH3pj48.png', 
      caption: {
        year: '2024',
        project: '"AI Night by Vercel" Branding Design'
      }
    },
    {
      type: 'image',
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oQS6zWEng55POnDt2PvtPrlx4ae4yk.png',
      caption: {
        year: '2024',
        project: '"v0" Hoodie Design'
      }
    },
    { 
      type: 'image', 
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%20-%20Evil%20Rabbit%20Billboard-Z27DVWEHMLVQZB5LuvlxCDvRPoNf7k.jpeg', 
      caption: {
        year: '2024',
        project: 'Evil Rabbit Poster'
      }
    },
    { 
      type: 'image', 
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%20-%20Billboard%20-%20Everybody%20can%20cook-4CUsyH8OVzjfeFsCXohwkmNfhSEVID.jpeg', 
      caption: {
        year: '2024',
        project: '"Everybody can cook" v0 Billboard Campaign'
      }
    }
  ].sort((a, b) => parseInt(a.caption.year) - parseInt(b.caption.year));

  // The rest of the component remains unchanged
  // ...
}

