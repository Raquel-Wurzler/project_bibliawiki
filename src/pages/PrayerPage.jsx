import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/PrayerPage.css';
import '../css/SobreNos.css';

export default function PrayerPage() {
  const [prayerRequests, setPrayerRequests] = useState([]);
  const [newRequest, setNewRequest] = useState('');

  const handleAddRequest = () => {
    const date = new Date().toLocaleString();
    const request = {
      text: newRequest,
      date,
      prayerCount: 0,
    };

    setPrayerRequests([...prayerRequests, request]);
    setNewRequest('');

    // Aqui você pode adicionar a lógica para enviar o pedido por e-mail para 'bibliawikioficial@gmail.com'
  };

  const handlePrayerClick = (index) => {
    const updatedRequests = [...prayerRequests];
    updatedRequests[index].prayerCount += 1;
    setPrayerRequests(updatedRequests);
  };

  return (
    <div className="prayer-page-container">
      <h1>Pedidos de Oração</h1>
      <div className="container" >
        <input
          type="text"
          placeholder="Insira seu pedido de oração"
          value={newRequest}
          onChange={(e) => setNewRequest(e.target.value)}
          className="insert-prayer"
        />
        <button
          onClick={handleAddRequest}
          className="btn-enviar"
        >
          Enviar
        </button>
      </div>
      <ul>
        {prayerRequests.map((request, index) => (
          <li key={index}>
            <div className="pedido">
              <span>{request.text} → </span>
              <span>{request.date} → </span>
              <button 
                onClick={() => handlePrayerClick(index)}
                className="btn-orar"
              >
                Orar
              </button>
              <span> → {request.prayerCount} Pessoas oraram</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="left">
          <img src="bibliawikiLogo.png" alt="logo-bibliawiki" className="logo"/>
          <Link
              to="/"
              className="btn-SobreNos"
              rel="noreferrer"
            >
                <i class="fa-solid fa-house"></i> Home
          </Link>
        </div>
    </div>
  );
}
