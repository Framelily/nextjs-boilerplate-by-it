import type { FC } from 'react'
import React from 'react'

import type { MenuProps } from 'antd'
import { Button, Dropdown } from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import menu from '@/configs/menu'

const Header: FC = () => {
  const { t } = useTranslation(['common'])
  const { asPath, locale } = useRouter()

  const items: MenuProps['items'] = [
    {
      key: 'TH',
      label: (
        <Link href={asPath} locale="th" className="text-sm">
          TH
        </Link>
      ),
    },
    {
      key: 'EN',
      label: (
        <Link href={asPath} locale="en" className="text-sm">
          EN
        </Link>
      ),
    },
  ]

  return (
    <header className="flex justify-between items-center container mx-auto py-4">
      {menu.map((item) => (
        <p>{t(item.label)}</p>
      ))}
      <Dropdown menu={{ items }} placement="bottomRight">
        <Button className="bg-black text-white border-none w-fit">{locale?.toLocaleUpperCase()}</Button>
      </Dropdown>
    </header>
  )
}

export default Header
