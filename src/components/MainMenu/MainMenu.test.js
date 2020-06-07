import React from 'react';
import { render } from '@testing-library/react';
import MainMenu from './MainMenu';
import i18n from '../../i18n/i18n';
import { I18nextProvider } from 'react-i18next';

test('should render without crashing', () => {
  const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <MainMenu />
      </I18nextProvider>
  );
  const publishedMenuItem = getByText(/News/i);
  const archivedMenuItem = getByText(/Archives/i);
  expect(publishedMenuItem).toBeInTheDocument();
  expect(archivedMenuItem).toBeInTheDocument();
});
