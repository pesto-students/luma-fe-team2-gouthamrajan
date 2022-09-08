import { Link as LinkR } from 'react-router-dom';

export default function Link({ children, to = '/' }) {
  return (
    <>
      <LinkR to={to} style={{}}>
        {children}
      </LinkR>
    </>
  );
}
