import React from 'react'

export type Item = {
  id: number,
  value: string,
  ref?: string
}

interface Props {
  title?: string
  placeholder?: string
  classProp?: string
  refs?: string
  items?: Item[]
  selected?: Item
}

export const SelectInput: React.FC<Props> = (props: Props) => {
  console.log(props)
  return (
    <div className="input-select-wrapper">
      <div className="input-select">
        <span className="placeholder"></span>
      </div>
    </div>
  )
}
