import React from 'react'
import Layout from '../components/layout'
import Card from '../components/card'
import Title from '../components/title'
import { MdShoppingBasket } from 'react-icons/md'
import Table from '../components/table'

const index = () => {
  return (
    <Layout>
      <div className='container mx-auto px-6 py-8'>
        <Title>Painel Administrativo DevShop</Title>

        <Card>
          <Card.Item>
            <Card.Item.Icon>
              <MdShoppingBasket className='h-8 w-8 text-white' />
            </Card.Item.Icon>
            <Card.Item.Data>
              <Card.Item.Data.Value>2000.00</Card.Item.Data.Value>
              <Card.Item.Data.Description>Produto</Card.Item.Data.Description>
            </Card.Item.Data>
          </Card.Item>

          <Card.Item>
            <Card.Item.Icon>
              <MdShoppingBasket className='h-8 w-8 text-white' />
            </Card.Item.Icon>
            <Card.Item.Data>
              <Card.Item.Data.Value>200</Card.Item.Data.Value>
              <Card.Item.Data.Description>Usuários</Card.Item.Data.Description>
            </Card.Item.Data>
          </Card.Item>

          <Card.Item>
            <Card.Item.Icon>
              <MdShoppingBasket className='h-8 w-8 text-white' />
            </Card.Item.Icon>
            <Card.Item.Data>
              <Card.Item.Data.Value>1000.00</Card.Item.Data.Value>
              <Card.Item.Data.Description>Vendas</Card.Item.Data.Description>
            </Card.Item.Data>
          </Card.Item>
        </Card>

        <div className='mt-8'></div>

        <div className='flex flex-col mt-8'>
          <div className='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
            <div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200'>
              <Table>
                <Table.Head>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Title</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Role</Table.Th>
                  <Table.Th></Table.Th>
                </Table.Head>
                <Table.Body>
                  <Table.Tr>
                    <Table.Td>
                      <div className='flex items-center'>
                        <div className='flex-shrink-0 h-10 w-10'>
                          <img
                            className='h-10 w-10 rounded-full'
                            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
                            alt=''
                          />
                        </div>

                        <div className='ml-4'>
                          <div className='text-sm leading-5 font-medium text-gray-900'>
                            John Doe
                          </div>
                          <div className='text-sm leading-5 text-gray-500'>
                            john@example.com
                          </div>
                        </div>
                      </div>
                    </Table.Td>

                    <Table.Td>
                      <div className='text-sm leading-5 text-gray-900'>
                        Software Engineer
                      </div>
                      <div className='text-sm leading-5 text-gray-500'>
                        Web dev
                      </div>
                    </Table.Td>

                    <Table.Td>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                        Active
                      </span>
                    </Table.Td>
                    <Table.Td>
                      <span className='text-sm leading-5 text-gray-500'>
                        Owner
                      </span>
                    </Table.Td>
                    <Table.Td>
                      <span className='text-sm leading-5 font-medium'>
                        <a
                          href='#'
                          className='text-indigo-600 hover:text-indigo-900'
                        >
                          Edit
                        </a>
                      </span>
                    </Table.Td>
                  </Table.Tr>
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index
