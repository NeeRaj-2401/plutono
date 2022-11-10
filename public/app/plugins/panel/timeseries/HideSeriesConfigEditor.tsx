import React, { useCallback } from 'react';
import _ from 'lodash';
import { FilterPill, HorizontalGroup } from '@credativ/plutono-ui';
import { FieldConfigEditorProps } from '@credativ/plutono-data';
import { HideSeriesConfig } from '@credativ/plutono-ui/src/components/uPlot/config';

export const SeriesConfigEditor: React.FC<FieldConfigEditorProps<HideSeriesConfig, {}>> = (props) => {
  const { value, onChange } = props;

  const onChangeToggle = useCallback(
    (prop: keyof HideSeriesConfig) => {
      onChange({ ...value, [prop]: !value[prop] });
    },
    [value, onChange]
  );

  return (
    <HorizontalGroup spacing="xs">
      {Object.keys(value).map((key: keyof HideSeriesConfig) => {
        return (
          <FilterPill
            icon={value[key] ? 'eye-slash' : 'eye'}
            onClick={() => onChangeToggle(key)}
            key={key}
            label={_.startCase(key)}
            selected={value[key]}
          />
        );
      })}
    </HorizontalGroup>
  );
};
