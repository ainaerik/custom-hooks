import React, { useCallback, useEffect } from 'react';
import _ from 'lodash';

const useDebouce = (func: any, keywords: any[], delay: number = 1000) => {
  const delayedQuery = useCallback(_.debounce(func, delay), [...keywords]);

  useEffect(() => {
    delayedQuery();
    return delayedQuery.cancel;
  }, [...keywords, delayedQuery]);
};

export default useDebouce;

/**
 * Usage :
 * 
 * useDebouce(() => searchUserList(), [searchKey], 700);
 */
