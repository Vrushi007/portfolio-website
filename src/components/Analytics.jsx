/* eslint-disable no-undef */
import React, { useEffect } from 'react'

const Analytics = () => {
  useEffect(() => {
    // Google Analytics 4 (replace with your GA4 measurement ID)
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'
    
    // Load Google Analytics
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `
    document.head.appendChild(script2)

    // Track page views
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href
    })

    // Track section views
    const trackSectionView = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gtag('event', 'section_view', {
            section_name: entry.target.id
          })
        }
      })
    }

    const observer = new IntersectionObserver(trackSectionView, {
      threshold: 0.5
    })

    // Observe all sections
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}

export default Analytics
