import React from 'react';
import {Form} from 'react-bootstrap';

const SiakadForm = ({formContent}) => {
  return (
    <form className="forms-sample">
      {formContent.map((form, index) => (
        <Form.Group key={index}>
          <label htmlFor={form.id}>{form.label}</label>
          {form.type === 'select' ?
            (
              <select className="form-control" id={form.id}>
                {form.data.map((option, index) => (
                  <option key={index}>{option.nama}</option>
                ))}
              </select>
            ) :
            (
              <Form.Control
                type={form.type}
                className="form-control"
                id={form.id}
                placeholder={form.placeholder}
              />
            )
          }
        </Form.Group>
      ))}
      <button
        type="submit" className="btn btn-primary mr-2">Submit</button>
      <button className="btn btn-dark">Cancel</button>
    </form>
  );
};

export default SiakadForm;
