// AddApp.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './AddApp.css'

const AddApp = ({addApp}) => {
  const initialValues = {
    appname: '',
    genre: '',
    version: '',
    rating: '',
    release_date: '',
    description: ''
  };

  const validationSchema = Yup.object().shape({
    appname: Yup.string().required('Application Name is required'),
    genre: Yup.string().required('Genre is required'),
    version: Yup.string().required('Version is required'),
    rating: Yup.string().required('Rating is required'),
    release_date: Yup.date().required('Release Date is required'),
    description: Yup.string().required('Description is required')
  });

  const handleSubmit = (values, { resetForm }) => {
    // Call service function to add application
    addApp(values);
    // Reset form values
    resetForm();
  };

  return (
    <div className='AddApp'>
      <h2>Add New Application</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label>Application Name:</label>
              <Field type="text" name="appname" />
              <ErrorMessage name="appname" />
            </div>
            <div>
              <label>Genre:</label>
              <Field type="text" name="genre" />
              <ErrorMessage name="genre" />
            </div>
            <div>
              <label>Version:</label>
              <Field type="text" name="version" />
              <ErrorMessage name="version" />
            </div>
            <div>
              <label>Rating:</label>
              <Field type="text" name="rating" />
              <ErrorMessage name="rating" />
            </div>
            <div>
              <label>Release Date:</label>
              <Field type="date" name="release_date" />
              <ErrorMessage name="release_date" />
            </div>
            <div>
              <label>Description:</label>
              <Field as="textarea" name="description" />
              <ErrorMessage name="description" />
            </div>
            <button type="submit">Add Application</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddApp;
