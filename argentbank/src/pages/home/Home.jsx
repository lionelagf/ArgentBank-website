import './home.scss'
import Banner from '../../components/banner/Banner'
import Features from '../../components/features/Features'
import IconChat from '../../assets/img/icon-chat.png'
import IconMoney from '../../assets/img/icon-money.png'
import IconSecurity from '../../assets/img/icon-security.png'


function Home() {
  return (
    <main>
      <Banner />
      <section className='features'>
        <Features
          img={IconChat}
          iconAlt='Chat Icon'
          title='You are our #1 priority'
          description='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
        />
        <Features
          img={IconMoney}
          iconAlt='Money Icon'
          title='More savings means higher rates'
          description='The more you save with us, the higher your interest rate will be!'
        />
        <Features
          img={IconSecurity}
          iconAlt='Security Icon'
          title='Security you can trust'
          description='We use top of the line encryption to make sure your data and money is always safe.'
        />
      </section>
    </main>
  )
}

export default Home
