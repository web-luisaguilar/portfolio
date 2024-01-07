import { useState } from 'react'
import DropdownItem from './DropdownItem'
import { ArrowDown } from './Icons'

export interface option {
  text: string
  value: string
}
interface propTypes {
  options: option[]
  defaultOption?: option
  handleChange: (value: option) => void
}
const Dropdown = ({ options, defaultOption, handleChange }: propTypes) => {
  const [selected, setSelected] = useState(defaultOption ? defaultOption : options[0])
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  const setOption = (option: option) => {
    setSelected(option)
    setIsOpen(false)
    handleChange(option)
  }

  return (
    <>
      <div className="w-[200px]">
        <div className="relative w-full ">
          <label
            htmlFor={selected.value + 'droptdown'}
            className="btn flex items-center justify-center gap-4"
            onClick={handleClick}
          >
            {selected.text} <ArrowDown className="stroke-customTheme-200" />
          </label>

          {isOpen && (
            <div className=" flex flex-col absolute top-[110%] w-full bg-black">
              {options.map((option) => (
                <DropdownItem item={option} key={option.text + 'droptdown'} handleClick={setOption} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Dropdown
