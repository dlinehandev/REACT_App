import { buildQueries } from '@testing-library/react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title} ) => {
  return (
    <header className='header'>
        <h1>{title}</h1> 
        <Button />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'blue'
// }

export default Header
