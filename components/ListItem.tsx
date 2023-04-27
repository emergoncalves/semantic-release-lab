import React from 'react'
import Link from 'next/link'

import { User } from '../interfaces'
import Typography from 'antd/es/typography/Typography'

const { Text } = Typography;

type Props = {
  data: User
}

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <Text>
    {data.id}:{data.name}
    </Text>
  </Link>
)

export default ListItem
