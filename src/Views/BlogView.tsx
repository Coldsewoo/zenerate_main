import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import axios from 'axios'

interface Props {}

const BlogView: React.FC<Props> = () => {
  const [contents, setContents] = useState([])
  const t = useTranslation('lang', { useSuspense: false })[0]

  useEffect(() => {
    const mediumRssFeed = 'https://medium.com/feed/@zenerate'
    const rssToJsonApi = 'https://api.rss2json.com/v1/api.json'
    const data = { params: { rss_url: mediumRssFeed } }
    axios.get(rssToJsonApi, data).then((res) => {
      console.log(res.data)
      setContents(res.data.items)
    })
  }, [])

  return (
    <>
      <div className="section section-blog-1">
        <div className="wrapper">
          {contents.map((c, i) => (
            <a
              key={c.guid}
              className="hover-pointer"
              href={c.link}
              target="_blank"
              rel="noopener noreferrer">
              <div>
                <img src={c.thumbnail} alt="t" style={{ width: '450px' }} />
                <span>{c.title}</span>
              </div>
            </a>
            // <span key={i}>{JSON.stringify(c)}</span>
          ))}
        </div>
      </div>
      <div className="section-blog-mobile">
        {contents.map((c, i) => (
          <a
            key={c.guid}
            className="hover-pointer"
            href={c.link}
            target="_blank"
            rel="noopener noreferrer">
            <div>
              <img src={c.thumbnail} alt="t" style={{ width: '450px' }} />
              <span>{c.title}</span>
            </div>
          </a>
          // <span key={i}>{JSON.stringify(c)}</span>
        ))}
      </div>
    </>
  )
}

export default BlogView
