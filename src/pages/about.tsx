import Header from './../components/header'
import Footer from './../components/footer'
import Image from 'next/image'

export default function About() {
  return (
    <main className="">
      <Header />
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ height: 700, color: '#333' }}
      >
        <div style={{ marginTop: 30, marginBottom: 30 }}>
          <div className="about-us-text">
            言图智能，是一家基于大模型技术的AI原生企业，基于大模型技术搭建AI原生商业应用，致力于重新改造场景商业应用流程，让每个人拥有AI，用上AI。
          </div>
          <div className="about-us-text">
            言图智能核心团队来自商汤、百度、腾讯等AI和互联网企业，60%以上成员拥有硕士博士学历，部分成员来自斯坦福、清华大学、香港中文大学等知名院校。
          </div>
        </div>
        <div className="about-us-image">
          <Image
            className="block h-8 w-auto cursor-pointer "
            height={272}
            width={215}
            src="/yantu_office.png"
            alt="Logo"
          />
        </div>
        <div style={{ marginTop: 10 }}>联系我们：</div>
        <div style={{ marginTop: 8 }}>
          商务合作：<span style={{ color: 'blue' }}>business@yantusol.com</span>
        </div>
        <div style={{ marginTop: 8 }}>关注公众号：言图智能</div>
        <div style={{ marginTop: 8 }}>公司：深圳市言图智能创新有限公司</div>
      </div>
      <Footer />
    </main>
  )
}
