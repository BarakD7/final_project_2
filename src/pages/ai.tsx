import MessageForm from 'components/MessageForm'
import MessagesList from 'components/MessageList'
import { NextPage } from 'next'
import { MessagesProvider } from 'utils/useMessages'
import Layout from '../components/Layout'
import Link from 'next/link'
const IndexPage: NextPage = () => {
  return (
    <MessagesProvider>
      <Link href="/">
      <div className='flex justify-center items-center font-medium bg-gray-500 text-white text-2xl'>
        <h2>Go Back</h2>
      </div>
      </Link>
     
      <Layout>
        <MessagesList />
        <div className="fixed bottom-0 right-0 left-0">
          <MessageForm />
        </div>
      </Layout>
    </MessagesProvider>
  )
}

export default IndexPage
