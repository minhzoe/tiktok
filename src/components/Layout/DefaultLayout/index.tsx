/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from './Header';
import Sidebar from './Sidebar';

export default function DefaultLayout( {children}: any ) {
  return (
    <div>
        <Header></Header>
        <div className='container'>
            <Sidebar></Sidebar>
            <div className='content'>
                {children}
            </div>
        </div>
    </div>
  )
}
