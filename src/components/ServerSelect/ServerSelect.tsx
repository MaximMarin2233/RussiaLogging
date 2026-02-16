'use client'
import CustomSelect from '@/components/CustomSelect/CustomSelect'
import { useServer } from '@/context/ServerContext'

const options = [
  { value: '1', label: 'Сервер №1' },
  { value: '2', label: 'Сервер №2' },
  { value: '3', label: 'Сервер №3' },
  { value: '4', label: 'Сервер №4' },
  { value: '5', label: 'Сервер №5' },
  { value: '6', label: 'Сервер №6' },
]

export default function ServerSelect() {
  const { server, setServer } = useServer()

  return (
    <CustomSelect
      options={options}
      value={String(server)}
      onChange={(val) => setServer(Number(val))}
    />
  )
}
