/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test/required_props';

import { EuiSelectableListItem } from './selectable_list_item';

describe('EuiSelectableListItem', () => {
  test('is rendered', () => {
    const component = render(<EuiSelectableListItem {...requiredProps} />);

    expect(component).toMatchSnapshot();
  });

  describe('props', () => {
    test('checked is on', () => {
      const component = render(<EuiSelectableListItem checked="on" />);

      expect(component).toMatchSnapshot();
    });

    test('checked is off', () => {
      const component = render(<EuiSelectableListItem checked="off" />);

      expect(component).toMatchSnapshot();
    });

    test('showIcons can be turned off', () => {
      const component = render(<EuiSelectableListItem showIcons={false} />);

      expect(component).toMatchSnapshot();
    });

    test('isFocused', () => {
      const component = render(<EuiSelectableListItem isFocused />);

      expect(component).toMatchSnapshot();
    });

    test('disabled', () => {
      const component = render(<EuiSelectableListItem disabled />);

      expect(component).toMatchSnapshot();
    });

    test('prepend', () => {
      const component = render(<EuiSelectableListItem prepend={<span />} />);

      expect(component).toMatchSnapshot();
    });

    test('append', () => {
      const component = render(<EuiSelectableListItem append={<span />} />);

      expect(component).toMatchSnapshot();
    });
  });
});
