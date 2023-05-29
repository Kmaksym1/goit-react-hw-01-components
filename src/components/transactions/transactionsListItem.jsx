import PropTypes from 'prop-types';
import {StyledCelltd, StyledTr} from './transactions.styled';


export function TransactionsListItem ({id, type, amount, currency}){
    return (
        <StyledTr key={id}>
      <StyledCelltd>{type}</StyledCelltd>
      <StyledCelltd>{amount}</StyledCelltd>
      <StyledCelltd>{currency}</StyledCelltd>
    </StyledTr>
    )
}

TransactionsListItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  )
}

