import React from 'react'

const DownloadResume = () => {
  const handleDownload = () => {
    // Replace this with your actual PDF resume link
    const resumeUrl = '/resume/VrushabhRajaghatta_Resume.pdf'
    
    // Check if PDF exists, if not show message
    fetch(resumeUrl, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          const link = document.createElement('a')
          link.href = resumeUrl
          link.download = 'VrushabhRajaghatta_Resume.pdf'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        } else {
          alert('Resume PDF is not available yet. Please use the print function or contact me directly.')
        }
      })
      .catch(() => {
        alert('Resume PDF is not available yet. Please use the print function or contact me directly.')
      })
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="download-resume">
      <button onClick={handleDownload} className="btn primary">
        <i className="fas fa-download"></i>
        Download PDF
      </button>
      <button onClick={handlePrint} className="btn secondary">
        <i className="fas fa-print"></i>
        Print Page
      </button>
    </div>
  )
}

export default DownloadResume
