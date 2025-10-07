import { Helmet } from 'react-helmet-async'

export default function SEO({ 
  title, 
  description, 
  keywords,
  ogImage = '/Logo.png',
  ogType = 'website'
}) {
  const siteTitle = 'ThatMattGuy - Web Design & Automation'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
