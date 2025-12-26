import styled from 'styled-components';
import Button from '../button/button.component';
export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`;

//margin-left: auto; = push button all the way to the right
export const PaymentButton = styled(Button)`
  margin-left: auto; // push button all the way to the right
  margin-top: 30px;
`;
