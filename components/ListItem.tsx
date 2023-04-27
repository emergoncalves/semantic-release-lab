import React from 'react'
import Link from 'next/link'

import { User } from '../interfaces'
import {Typography} from 'antd';

const { Paragraph } = Typography;

type Props = {
  data: User
}

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <Paragraph>
    {data.id}:{data.name}
    </Paragraph>
  </Link>
)

export default ListItem
