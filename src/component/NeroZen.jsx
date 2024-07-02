import React, { useEffect } from 'react';

const NeroZen = () => {
  useEffect(() => {
    // Watson Assistant chat options
    window.watsonAssistantChatOptions = {
      integrationID: "6e5963e0-a2ce-434c-bc67-4b4b1d6ccab5", // Replace with your integration ID
      region: "us-south", // Replace with your region
      serviceInstanceID: "204aca20-6c12-4675-a4f7-0bae31905ce1", // Replace with your service instance ID
      onLoad: async (instance) => { await instance.render(); }
    };

    // Create and append script
    const script = document.createElement('script');
    script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || 'latest') +
      "/WatsonAssistantChatEntry.js";
    script.async = true;
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything itself
};

export default NeroZen;