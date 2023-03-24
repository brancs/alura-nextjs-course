import FAQScreen from '@/components/screens/FAQScreen';

export default FAQScreen; 

//! getServerSideProps() -> Roda a cada acesso e não funciona com o next export, somente com o next start
//! getStaticProps() -> Roda em Build Time
export async function getStaticProps() {
  const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"

  const faqList = await fetch(FAQ_API_URL)
    .then((response) => {
      return response.json()
    }).then((result) => {
      return result
    })

  return {
    props: {
      faqList
    },
  }
}