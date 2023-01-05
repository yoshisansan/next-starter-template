import { useMediaQuery } from '@chakra-ui/react';

import { querySize } from '@/styles/Breakpoints';

interface queryType {
  [key: string]: boolean;
}

const useResponsive = (): queryType => {
  const queriesMax = Object.entries(querySize.max).map(([queryKey, queryVal]): queryType => {
    // eslint-disable-next-line
    const [isMax] = useMediaQuery(queryVal);
    const key = `${queryKey}Max`;

    return { [key]: isMax };
  });
  const queriesMin = Object.entries(querySize.min).map(([queryKey, queryVal]): queryType => {
    // eslint-disable-next-line
    const [isMin] = useMediaQuery(queryVal); // This is a HOOK wrapped HOOK. As a result, it ignores eslint as an exception since it is only used by React Function Component.
    const key = `${queryKey}Min`;

    return { [key]: isMin };
  });
  const arr = [...queriesMax, ...queriesMin];
  const queryBoolObject = arr.reduce((obj, item) => ({ ...obj, ...item }), {});

  return queryBoolObject;
};

export default useResponsive;
