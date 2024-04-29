import ReviewCarousel from './components/ReviewCarousel'
import './App.css'

const reviewsList =[
  {
    imageUrl:'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    userName:'Wade Warren',
    companyName:'Rang',
    description:'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imageUrl:'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    userName:'Adrian Williams',
    companyName:'WheelO',
    description:'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    userName: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    userName: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

const App = () =>{ 
   return(
    <>
    <ReviewCarousel reviewsList = {reviewsList} />
    </>
   )
}
export default App;