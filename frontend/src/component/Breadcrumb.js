import React, {useMemo} from 'react';

const Breadcrumb = ({title, options}) => {
  const showBreadcrumb = useMemo(() => {
    const breadcrumb = [];
    for (let index = 0; index < options.length; index++) {
      if (index !== options.length - 1) {
        breadcrumb.push(<li className="breadcrumb-item" key={index}>
          <a href="!#" onClick={(event) => event.preventDefault()}>
            {options[index]}
          </a>
        </li>);
      } else {
        breadcrumb.push(<li key={index}
          className="breadcrumb-item active" aria-current="page">
          {options[index]}
        </li>);
      }
    }

    return breadcrumb;
  }, [options]);

  return (
    <div className="page-header">
      <h3 className="page-title"> {title} </h3>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {showBreadcrumb}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
