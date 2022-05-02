import React from 'react';
import Breadcrumb from './Breadcrumb';

const ContentHolder = ({children}) => {
  return (
    <>
      <Breadcrumb title='Data Siswa' options={['Dashboard', 'Siswa']} />
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentHolder;
