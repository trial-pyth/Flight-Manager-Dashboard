import Table from './display/Table';
import './widget.scss';

const Widget = () => {
  return (
    <div className='flight-widget'>
      <header>DEPARTURES</header>
      <Table/>
    </div>
  )
}

export default Widget