import styled from 'styled-components';

const ErrorMessage = styled.div`
  display: block;
  color: #cb3234;
  margin: 1rem;
`;

const  Error = ({message}) => {
  return ( 
    <ErrorMessage> {message} </ErrorMessage>
   );
}
 
export default Error;