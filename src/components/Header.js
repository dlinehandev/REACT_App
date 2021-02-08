import { buildQueries } from '@testing-library/react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title} ) => {
  const onClick = () => {
    console.log('Click')
  }

  return (
    <header className='header'>
        <h1>{title}</h1> 
        <Button color='green' text='Add' onClick={onCLick}/>
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
