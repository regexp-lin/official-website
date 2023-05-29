import Header from './../components/header'
import Footer from './../components/footer'
import Image from 'next/image'

export default function Index() {
  const list = [
    {
      title: '前沿技术',
      descript: '基于独有大模型AI中台，为企业提供多类型、高性能大模型应用',
    },
    {
      title: '解决方案',
      descript: '全场景、高效、实用的解决方案，帮助企业和个人降本增效',
    },
    {
      title: '品质服务',
      descript: '提供专业的指导和优化服务，让每个用户用上高质量AI',
    },
  ]
  return (
    <main className="">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-2 h-96">
        <div className="relative h-full">
          <Image src="/banner.jpeg" alt="Banner" layout="fill" objectFit="cover" quality={100} />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                欢迎来到 言图智能创新
              </h1>
              <p className="text-lg lg:text-xl text-white">
                在这里，你可以构建属于自己领域的AI，属于自己品牌的AI。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16 from-gray-300 to-gray-700">
        <div className="py-2 text-center mb-4">
          <h2 className="text-center text-xl mb-2">我们提供</h2>
          <p className="text-xs text-gray-400">当然不止这些</p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-between mb-4 w-full">
          {list.map((item) => {
            return (
              <div
                style={{ width: 400 }}
                className="h-1/2 md:h-1/4 mx-2 p-2 mb-8 md:mb-1 rounded-md shadow cursor-pointer hover:shadow-md"
                key={item.title}
              >
                <h3 className="text-center text-lg">{item.title}</h3>
                <p className="block p-4 text-sm text-gray-500 tracking-wider leading-6">
                  {item.descript}
                </p>
              </div>
            )
          })}
        </div>
      </div>
      {/* <div>
        <Image src="/设计图.png" width={1600} height={700} alt="设计图" />{' '}
      </div> */}

      <Footer />
    </main>
  )
}
