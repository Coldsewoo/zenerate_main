import React, { useState, useRef, useEffect, useCallback } from 'react'

export type Item = {
  id: number
  value: string
  ref?: string
}

interface Props {
  placeholder?: string
  items?: Item[]
  selected?: string
  onSelect: (v: string) => void
}

export const SelectInput: React.FC<Props> = (props: Props) => {
  const [showDropdown, toggleDropdown] = useState<boolean>(false)
  const handleDropdownClick = () => {
    const dd = showDropdown
    toggleDropdown(!dd)
  }

  const dummyRef = useCallback(
    (node) => {
      if (node !== null && showDropdown) {
        node.focus()
      }
    },
    [showDropdown]
  )

  return (
    <div style={{ position: 'relative' }}>
      <div className="input-select-wrapper">
        <input
          className="dummy"
          type="text"
          ref={dummyRef}
          onBlur={() =>
            setTimeout(() => {
              toggleDropdown(false)
            }, 200)
          }
        />
        <div
          className="input-select hover-pointer"
          onClick={() => {
            handleDropdownClick()
          }}>
          {props.selected.length === 0 && (
            <span className="placeholder">{props.placeholder || 'Select'}</span>
          )}
          {props.selected.length > 0 && (
            <span className="selected">{props.selected}</span>
          )}
          <i className="material-icons noselect">
            {showDropdown ? 'expand_less' : 'expand_more'}
          </i>
        </div>
      </div>
      {showDropdown && (
        <div className="input-select-dropdown">
          {props.items.map((item: Item) => (
            <div
              className="input-select-dropdown-item hover-pointer"
              key={item.id}
              onClick={() => props.onSelect(item.value)}>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
