import React from 'react'
import { withRouter } from 'react-router-dom'

const ProjectView: React.FC = () => {

  const style = {
    fontSize: 30,
    fontFamily: "neue-haas-grotesk-display",
    color: "#333333",
    letterSpacing: "0.02em"
  }

  return (
    <>
      <div className="section section-project-2">
        <p className="nhgt" style={{...style, fontWeight: 100}}>Neue Haas Grotesk Display 100</p>
        <p className="nhgt" style={{...style, fontWeight: 200}}>Neue Haas Grotesk Display 200</p>
        <p className="nhgt" style={{...style, fontWeight: 300}}>Neue Haas Grotesk Display 300</p>
        <p className="nhgt" style={{...style, fontWeight: 400}}>Neue Haas Grotesk Display 400</p>
        <p className="nhgt" style={{...style, fontWeight: 500}}>Neue Haas Grotesk Display 500</p>
        <p className="nhgt" style={{...style, fontWeight: 600}}>Neue Haas Grotesk Display 600</p>
        <p className="nhgt" style={{...style, fontWeight: 700}}>Neue Haas Grotesk Display 700</p>
        <p className="nhgt" style={{...style, fontWeight: 800}}>Neue Haas Grotesk Display 800</p>
        <p className="nhgt" style={{...style, fontWeight: 900}}>Neue Haas Grotesk Display 900</p>
        <p className="nhgt" style={{...style, fontFamily: "neue-haas-grotesk-text",fontWeight: 400}}>Neue Haas Grotesk Text 400</p>
        <p className="nhgt" style={{...style, fontFamily: "neue-haas-grotesk-text",fontWeight: 500}}>Neue Haas Grotesk Text 500</p>
        <p className="nhgt" style={{...style, fontFamily: "neue-haas-grotesk-text",fontWeight: 600}}>Neue Haas Grotesk Text 600</p>
        <p className="nhgt" style={{...style, fontFamily: "NanumSquare", fontWeight: 100}}>나눔스퀘어 한글폰트 100</p>
        <p className="nhgt" style={{...style, fontFamily: "NanumSquare", fontWeight: 200}}>나눔스퀘어 한글폰트 200</p>
        <p className="nhgt" style={{...style, fontFamily: "NanumSquare", fontWeight: 300}}>나눔스퀘어 한글폰트 300</p>
        <p className="nhgt" style={{...style, fontFamily: "NanumSquare", fontWeight: 400}}>나눔스퀘어 한글폰트 400</p>
        <p className="nhgt" style={{...style, fontFamily: "NanumSquare", fontWeight: 500}}>나눔스퀘어 한글폰트 500</p>
        <p className="nhgt" style={{...style, fontFamily: "NanumSquare", fontWeight: 600}}>나눔스퀘어 한글폰트 600</p>
        <p className="nhgt" style={{...style, fontFamily: "NanumSquare", fontWeight: 700}}>나눔스퀘어 한글폰트 700</p>
        <p className="nhgt" style={{...style, fontFamily: "NanumSquare", fontWeight: 800}}>나눔스퀘어 한글폰트 800</p>
        <p className="nhgt" style={{...style, fontFamily: "NanumSquare", fontWeight: 900}}>나눔스퀘어 한글폰트 900</p>
      </div>
      <div className="section section-project-3">
asd
      </div>
    </>
  )
}

export default withRouter(ProjectView)