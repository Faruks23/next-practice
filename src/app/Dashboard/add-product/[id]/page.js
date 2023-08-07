import React from 'react';

const DynamicPage = ({ params }) => {
  console.log(params);
  return (
    <div>
      Hello DynamicPage:{params.id}
    </div>
  );
};

export default DynamicPage;