import PropTypes from 'prop-types';
import {
  StyledCell,
  StyledTable,
  StyledCelltd,
  StyledTr,
} from './transactions.styled';

export function TransactionHistory({ table }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledCell>Type</StyledCell>
          <StyledCell>Amount</StyledCell>
          <StyledCell>Currency</StyledCell>
        </tr>
      </thead>
      <tbody>
        {table.map(({ id, type, amount, currency }) => (
          <StyledTr key={id}>
            <StyledCelltd>{type}</StyledCelltd>
            <StyledCelltd>{amount}</StyledCelltd>
            <StyledCelltd>{currency}</StyledCelltd>
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
  );
}

TransactionHistory.propTypes = {
  table: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
