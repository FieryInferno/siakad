import React from 'react';
import {Form} from 'react-bootstrap';

const SiakadForm = ({formContent, onSubmit}) => {
  return (
    <>
      {formContent.map((form, index) => (
        <Form.Group key={index}>
          <label htmlFor={form.id}>{form.label}</label>
          {form.type === 'select' ?
            (
              <select
                className="form-control" id={form.id} onChange={form.onChange}>
                <option>{form.placeholder}</option>
                {form.data.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.nama}
                  </option>
                ))}
              </select>
            ) :
            (
              <Form.Control
                type={form.type}
                className="form-control"
                id={form.id}
                placeholder={form.placeholder}
                onChange={form.onChange}
              />
            )
          }
        </Form.Group>
      ))}
      <button
        className="btn btn-primary mr-2" onClick={onSubmit}>Submit</button>
      <button className="btn btn-dark">Cancel</button>
    </>
  );
};

export default SiakadForm;
