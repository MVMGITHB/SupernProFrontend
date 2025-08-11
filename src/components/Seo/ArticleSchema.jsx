'use client';
import React from 'react';

export const ArticleSchema = ({ article }) => {
  if (!article) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "image": [article.image],
    "author": {
      "@type": "Person",
      "name": article.author || "Admin"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Your Site Name",
      "logo": {
        "@type": "ImageObject",
        "url": article.publisherLogo
      }
    },
    "datePublished": article.createdAt,
    "dateModified": article.updatedAt || article.createdAt,
    "description": article.meta_description || "",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
