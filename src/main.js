import './style.css'

document.querySelector('#app').innerHTML = `
  <div class='head'>
    <h1> Yuliia <br>Tkachenko </h1>
    <p>19 ans</p>
  </div>
  <div class='profil'>
    <h3> Nationalité</h3>
    <p>Ukrainienne</p>
    <h3> Compétences techniques </h3>
    <ul>
      <li>Connaissance des bases de la programmation :  JavaScript, HTML, CSS </li>
      <li>Familiarité avec les outils de développement web (VS Code, Chrome DevTools)</li>
      <li>Bases de données : compréhension des concepts SQL</li>
    </ul>
    <h3>Compétences interpersonnelles </h3>
    <ul>
      <li>Excellentes capacités de communication et écoute active</li>
      <li>Travail en équipe et gestion des conflits</li>
      <li>Résolution de problèmes et capacité d'adaptation dans des situations stressantes</li>
    </ul>

    <h3> Langues </h3>
    <ul>
      <li> Français : A2</li>
      <li> Anglais : B1</li>
      <li> Russe : C1</li>
      <li> Ukrainien : C1</li>
    </ul>
    <h3>Certificats</h3>
    <p> Diplôme d'etude secondaires complètes</p>
    <h3>Éducation </h3>
    <dl>
      <dt>École nationale de Kharkiv numéro 145, Kharkiv-Ukraine</dt>
      <dd> Septembre 2011 - Mai 2022</dd>
      <dt>IFOSUP, Wavre-Belgique </dt>
      <dd> Septembre 2024</dd>
    </dl>
  </div>
`
