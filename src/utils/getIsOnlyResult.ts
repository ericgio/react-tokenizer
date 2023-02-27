import getOptionProperty from './getOptionProperty';

import { AllowNew, OptionType } from '../types';

interface Props {
  allowNew: AllowNew;
  highlightOnlyResult: boolean;
  results: OptionType[];
}

function getIsOnlyResult(props: Props): boolean {
  const { allowNew, highlightOnlyResult, results } = props;

  if (!highlightOnlyResult || allowNew) {
    return false;
  }

  return results.length === 1 && !getOptionProperty(results[0], 'disabled');
}

export default getIsOnlyResult;
