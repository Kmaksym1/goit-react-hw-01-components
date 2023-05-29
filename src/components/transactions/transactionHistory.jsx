import PropTypes from 'prop-types';
import {StyledCell, StyledTable} from './transactions.styled';
import { TransactionsListItem } from './transactionsListItem.jsx';

export function TransactionHistory ({table}){
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
  {table.map(({id, type, amount, currency}) =>
    <TransactionsListItem
      id={id}
      type={type}
      amount={amount}
      currency={currency}
    />
    )}
  </tbody>
</StyledTable>
    )
}

TransactionHistory.propTypes = {
  table: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  )
}
