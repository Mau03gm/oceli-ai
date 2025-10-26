
import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  company: string;
  email: string;
  message: string;
}

export function EmailTemplate({ firstName, company, email, message }: EmailTemplateProps) {
  return (
    <div>
      <h1>Nombre: {firstName}</h1>
      <h1>Empresa: {company}</h1>
      <h1>Email: {email}</h1>
      <h1>Message: {message}</h1>
    </div>
  );
}
