import React, { useEffect } from 'react';
interface PageProps{
    title:string
}
const PageTitle = (props:PageProps) => {
  useEffect(() => {
    document.title = props.title;
  }, [props]);

  return null; // This component doesn't render anything in the DOM
};

export default PageTitle;