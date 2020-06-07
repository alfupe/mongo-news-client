import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import validationSchema from './validation-schema';
import { I18nContext } from 'react-i18next';
import { Button, Col, Row } from 'antd';
import TextAreaField from '../Form/Fields/TextAreaField';
import InputField from '../Form/Fields/InputField';
import Flex from '../Flex/Flex';

const ArticleForm = props => {
    const {i18n} = useContext(I18nContext);

    return (
        <Formik validationSchema={validationSchema(i18n)}
                initialValues={{
                    title: '',
                    content: '',
                    author: '',
                    description: '',
                }}
                onSubmit={(values, {setSubmitting}) => {
                    props.onSubmit(values);
                    setSubmitting(false);
                }}>
            {props => (
                <Form>
                    <Row gutter={15}>
                        <Col span={12}>
                            <InputField label={i18n.t('entity.new.property.title')}
                                        name="title"
                                        placeholder={i18n.t('entity.new.property.title')}
                            />
                        </Col>
                        <Col span={12}>
                            <InputField label={i18n.t('entity.new.property.author')}
                                        name="author"
                                        placeholder={i18n.t('entity.new.property.author')}
                            />
                        </Col>
                    </Row>
                    <Row gutter={15}>
                        <Col span={24}>
                            <InputField label={i18n.t('entity.new.property.content')}
                                        name="content"
                                        placeholder={i18n.t('entity.new.property.content')}
                            />
                        </Col>
                    </Row>
                    <Row gutter={15}>
                        <Col span={24}>
                            <TextAreaField label={i18n.t('entity.new.property.description')}
                                           name="description"
                                           placeholder={i18n.t('entity.new.property.description')}
                            />
                        </Col>
                    </Row>
                    <Flex justifyContent="end">
                        <Button type="primary"
                                htmlType="submit"
                                disabled={props.isSubmitting || !props.isValid}>
                            {i18n.t('global.accept')}
                        </Button>
                    </Flex>
                </Form>
            )}
        </Formik>
    );
};

ArticleForm.defaultProps = {
    onSubmit: () => {}
};

export default ArticleForm;
