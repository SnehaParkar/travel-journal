import './css/bootstrap.css';
import './css/App.css';


import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import data from './data';

function App() {
  const cards = data.map((card) => {
    return <Card key={card.key} {...card} />;
  });

  return (
    <div className="App">
      <Header />
      <section className='cards-list'>
        {cards}
      </section>
      <Footer />
    </div>
  );
}

export default App;
