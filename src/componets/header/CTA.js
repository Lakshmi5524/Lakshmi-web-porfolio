import React from "react"

const CTA = () => {
  return (
    <div className="cta">
      <a
        className="btn"
        href="https://drive.google.com/file/d/1WfUfHFOFV4j4A8bKqf1ptKo3LvRkmt5-/view?usp=sharing"
        download
        target="_blank"
        rel="noreferrer"
      >
        DownloadCV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  )
}

export default CTA
