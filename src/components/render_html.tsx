import React, { useEffect, useState } from 'react';
import { onCallbackData } from 'zmp-sdk';

const ExternalHtmlPage: React.FC<{ filePath: string }> = ({ filePath }) => {
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch(filePath);
    
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);

        }
    
        const data = await response.text();
        console.log('Fetched HTML:', data);
        setHtmlContent(data);
      } catch (error) {
        console.error('Error fetching HTML:', error);
      }
    };

    fetchHtmlContent();
  }, [filePath]);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default ExternalHtmlPage;
