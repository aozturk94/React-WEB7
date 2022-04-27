import React from 'react'
import AboutSection from './AboutSection'
import MenuSection from './MenuSection'
import ContactSection from './ContactSection'
function PageContent() {
  return (
<div className="w3-content" style={{ maxWidth: 1100 }}>
    <AboutSection></AboutSection>
    <ContactSection></ContactSection>
    <MenuSection></MenuSection>
</div>

  )
}

export default PageContent