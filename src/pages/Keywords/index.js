import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormikCheckboxArray from 'components/FormikCheckboxArray';
import { Formik, Field, Form } from 'formik';
import { setSelectedKeywordsAndSave } from 'reducers/main.js';
import notification from 'helpers/notification';

export default props => {
    const { keywords, selectedKeywords } = useSelector(state => ({
        keywords: state.keywords,
        selectedKeywords: state.selectedKeywords,
    }));
    const dispatch = useDispatch();

    const options = keywords.map(item => ({ value: item.id, label: item.text }));

    const onSubmit = async values => {
        await dispatch(setSelectedKeywordsAndSave(values.selectedKeywords));
        notification('Keywords have been updated');
    };

    return (
        <div>
            <h2>Keywords</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ipsa laboriosam
                architecto neque corrupti vel quam illum, amet facere, deleniti, soluta ut quidem
                dolore beatae ipsam. Iste consequatur quod, tenetur in nemo esse amet officiis
                veritatis, voluptatibus voluptates. Est quis ad laborum consequatur sint consectetur
                quibusdam, natus voluptas quisquam sunt quas saepe animi labore cum doloribus odit
                velit rerum. Quas fugiat, quidem sed, pariatur perspiciatis vitae sunt animi non id
                minus adipisci, rerum quod. Omnis autem voluptatibus dicta beatae ratione, unde
                iusto voluptate enim doloribus amet expedita odit, sunt quisquam laboriosam
                reiciendis rerum labore corporis maxime, et impedit optio dolore.
            </p>
            <Formik initialValues={{ selectedKeywords }} onSubmit={onSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <Field
                            name="selectedKeywords"
                            component={FormikCheckboxArray}
                            options={options}
                        />

                        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                            {isSubmitting && (
                                <span className="spinner-border spinner-border-sm mr-2" />
                            )}
                            Update
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
