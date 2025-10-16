import React from 'react';
import './HttpMethod.css';

interface HttpMethodProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  children?: React.ReactNode;
}

const HttpMethod: React.FC<HttpMethodProps> = ({ method, children }) => {
  return (
    <span className={`http-method http-method--${method.toLowerCase()}`}>
      {method}
    </span>
  );
};

export default HttpMethod;
