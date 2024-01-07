import { option } from './Dropdown'

interface propTypes {
  item: option
  handleClick: (option: option) => void
}
const DropdownItem = ({ item, handleClick }: propTypes) => {
  return (
    <>
      <label
        htmlFor={item.value + 'droptdown'}
        className="btn w-full flex items-center justify-start"
        onClick={() => handleClick(item)}
      >
        {item.text}
      </label>
    </>
  )
}

export default DropdownItem
