import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Models
import { LEVELS } from '../../../models/levels.enum.js';
import { User } from '../../../models/user.class';

const TaskFormik = () => {

    let user = new User();

    const initialValues = {
        name: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL
    }

    const registerSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(3, 'Username too short')
                .max(30, 'Username too long')
                .required('Username is required'),
            description: Yup.string()
                .required('Description is required'),
            completed: Yup.boolean()
                .required('Completed is required'),
            level: Yup.string()
                .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must select a level: normal, urgent or blocking')
                .required('Level is required'),
        }
    )

    const submit = (values) => {
        alert('Register user')
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues = {initialValues}
                // *** Yup Validation Schema ***
                validationSchema = {registerSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                }}
            >

            {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="name">Name</label>
                            <Field id="name" type="text" name="name" placeholder="Name" />
                            
                            {/* Username Errors */}
                            {
                                errors.name && touched.name && 
                                (
                                    <ErrorMessage name="name" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="description">Description</label>
                            <Field id="description" type="text" name="description" placeholder="Description" />

                            {/* Description Errors */}
                            {
                                errors.description && touched.description && 
                                (
                                    <ErrorMessage name="description" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="completed">Completed?</label>
                            <Field id="completed" type="checkbox" name="completed" />

                            {/* Completed Errors */}
                            {
                                errors.completed && touched.completed && 
                                (
                                    <ErrorMessage name="completed" component='div'></ErrorMessage>
                                )
                            }

                            <select className='form-control lg' ref={initialValues} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                                <option value={LEVELS.NORMAL}>Normal</option>
                                <option value={LEVELS.URGENT}>Urgent</option>
                                <option value={LEVELS.BLOCKING}>Blocking</option>

                                {/* Level Errors */}
                                {
                                    errors.level && touched.level && 
                                    (
                                        <ErrorMessage name="level" component='div'></ErrorMessage>
                                    )
                                }

                            </select>

                            <button type="submit">Register Account</button>
                            {isSubmitting ? (<p>Sending your credentials...</p>): null}

                        </Form>
                    )
            }

            </Formik>
        </div>
    );
}

export default TaskFormik;
