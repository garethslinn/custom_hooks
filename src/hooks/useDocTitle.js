import { useEffect } from 'react';

export const useDocTitle = docTitle => {
    useEffect(() => {
      document.title = docTitle;
    }, [docTitle]);
  };

  // useage:
  // changes document title
  //
  // useDocTitle('new title')