import React from 'react';
import { fireEvent, wait, render } from '@testing-library/react';
import i18n from '../../i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import ArticleForm from './ArticleForm';

describe('<ArticleForm /> submit validation', function () {
    test('should not submit. Form is not valid', async () => {
        const onSubmit = jest.fn();
        const {getByPlaceholderText, getByText} = render(
            <I18nextProvider i18n={i18n}>
                <ArticleForm onSubmit={onSubmit} />
            </I18nextProvider>
        );
        const submitButton = getByText(/Accept/i).closest('button');

        await wait(() => {
            fireEvent.click(submitButton);
        });

        expect(getByPlaceholderText(/Title/i).nextSibling).toHaveTextContent('Required');
        expect(getByPlaceholderText(/Author/i).nextSibling).toHaveTextContent('Required');
        expect(getByPlaceholderText(/Content/i).nextSibling).toHaveTextContent('Required');
        expect(getByPlaceholderText(/Description/i).nextSibling).toHaveTextContent('Required');
        expect(submitButton).toHaveAttribute('disabled');
        expect(onSubmit).toBeCalledTimes(0);
    });

    test('should submit', async () => {
        const onSubmit = jest.fn();
        const {getByPlaceholderText, getByText} = render(
            <I18nextProvider i18n={i18n}>
                <ArticleForm onSubmit={onSubmit} />
            </I18nextProvider>
        );
        const submitButton = getByText(/Accept/i).closest('button');

        await wait(() => {
            fireEvent.change(getByPlaceholderText(/Title/i), { target: { value: 'Test title' } });
            fireEvent.change(getByPlaceholderText(/Author/i), { target: { value: 'Test Author' } });
            fireEvent.change(getByPlaceholderText(/Content/i), { target: { value: 'Test Content' } });
            fireEvent.change(getByPlaceholderText(/Description/i), { target: { value: 'Test Description' } });
            fireEvent.click(submitButton);
        });

        expect(onSubmit).toBeCalled();
    });
});
