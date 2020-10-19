import React from "react";
// components
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <title>Navedex - {title}</title>
    </Helmet>
  );
};

export default SEO;
