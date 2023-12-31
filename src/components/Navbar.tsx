import Image from 'next/image'
import Link from 'next/link'
import { NavLinks } from '../../constants'
import AuthProvider from './AuthProvider'
import { getCurrentUser } from '@/lib/session'


async function Navbar() {
    const session = await getCurrentUser()

    return (
        <nav className=' flexBetween navbar'>
            <div className=' flex-1 flexStart gap-10'>
                <Link href={'/'}>
                    <Image src={'/logo.svg'}
                        width={115}
                        height={43}
                        alt='Flexibble' />
                </Link>

                <ul className=' xl:flex hidden text-small gap-7' >
                    {NavLinks.map((link) => <Link href={link.href} key={link.key} > {link.text} </Link>)}
                </ul>

                <div className='flexCenter gap-4'>
                    {session?.user ?
                        (
                            <>
                                {session?.user?.image
                                    &&
                                    <Image src={session?.user?.image as string}
                                        width={40} height={40}
                                        className=' rounded-full'
                                        alt={session?.user?.name} />
                                }
                                <Link href='/create-project'>
                                    Share Work
                                </Link>
                            </>
                        )
                        :
                        (
                            <>
                                <AuthProvider />
                            </>
                        )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar