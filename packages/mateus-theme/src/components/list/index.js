import Link from '@frontity/components/link'
import {connect} from 'frontity'
import { useEffect } from 'react';
const List = ({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <div>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id]
        return (
          <Link key={item.id} link={post.link}>
            <h2>
            {post.title.rendered}
            </h2>
            <br />
          </Link>
        )
      })}
    </div>
  )
}
export default connect(List)