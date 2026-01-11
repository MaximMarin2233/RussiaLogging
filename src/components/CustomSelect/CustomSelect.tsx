'use client'
import { useState } from 'react'
import styles from './CustomSelect.module.scss'

interface Option {
  value: string
  label: string
}

interface CustomSelectProps {
  options: Option[]
  value?: string
  onChange?: (value: string) => void
}

export default function CustomSelect({
  options,
  value,
  onChange,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string>(value || options[0]?.value)

  const toggleOpen = () => setIsOpen(!isOpen)

  const handleSelect = (val: string) => {
    setSelected(val)
    setIsOpen(false)
    if (onChange) onChange(val)
  }

  return (
    <div className={styles.selectContainer}>
      <div className={styles.selectHeader} onClick={toggleOpen}>
        {options.find((o) => o.value === selected)?.label}
      </div>

      {isOpen && (
        <ul className={`${styles.selectList} list-reset`}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`${styles.selectItem} ${selected === opt.value ? styles.selected : ''}`}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
