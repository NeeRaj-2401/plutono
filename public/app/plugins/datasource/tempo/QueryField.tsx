import { ExploreQueryFieldProps } from '@credativ/plutono-data';
import { selectors } from '@credativ/plutono-e2e-selectors';
import { LegacyForms } from '@credativ/plutono-ui';
import React from 'react';
import { TempoDatasource, TempoQuery } from './datasource';

type Props = ExploreQueryFieldProps<TempoDatasource, TempoQuery>;
export class TempoQueryField extends React.PureComponent<Props> {
  render() {
    const { query, onChange } = this.props;

    return (
      <LegacyForms.FormField
        label="Trace ID"
        labelWidth={4}
        inputEl={
          <div className="slate-query-field__wrapper">
            <div className="slate-query-field" aria-label={selectors.components.QueryField.container}>
              <input
                style={{ width: '100%' }}
                value={query.query || ''}
                onChange={(e) =>
                  onChange({
                    ...query,
                    query: e.currentTarget.value,
                  })
                }
              />
            </div>
          </div>
        }
      />
    );
  }
}
