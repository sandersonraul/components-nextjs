import type { NextPage } from 'next'
import Lista from '../components/Lista'
import Item from '../components/Item'

const Home: NextPage = () => {
  return (
    <>
    <Lista>
      <Item text='Morango'></Item>
      <Item text='Pão'></Item>
      <Item text='Lasanha'></Item>
    </Lista>
    </>
  )
}

export default Home
