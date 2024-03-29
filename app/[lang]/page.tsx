import Link from 'next/link'
import { useTranslation } from '../i18n'
import Image from 'next/image'

export default async function Home ({ params: { lang } } : { params: { lang: string } }) {
  const { t } = await useTranslation(lang, 'translation')
  return (
    <>
      <div className=''>

        <div className='container max-w-screen-lg mx-auto pb-10'>
          <Image src='/SOUTH_logo.png' className='mx-auto pt-10' alt='South Original Picture' width={180} height={128} />
        </div>

        <h1 className='text-center mb-4 mt-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl'>{t('title')}</h1>
        <h1 className='text-center mb-4 mt-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl'><span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>{t('southoriginal')}</span></h1>

        <div className='grid place-items-center mt-60'>
          <Link href={`/${lang}/login`}>
            <div className='flex justify-center font-bold whitespace-nowrap rounded-md border border-transparent bg-emerald-400 px-4 py-2 text-base text-white shadow-sm hover:bg-emerald-500'>
              {t('login')}
            </div>
          </Link>
        </div>
      </div>

    </>
  )
}
