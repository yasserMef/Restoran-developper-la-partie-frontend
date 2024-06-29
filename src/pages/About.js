import React from 'react';
import '../css/About.css'; // Assurez-vous de créer un fichier CSS pour styliser votre composant

const About = () => {
  return (
    <div className="about-container">
      <section className="about">
        <h1>Bienvenue sur le Blog Restoron!</h1>
        <p>
          Restoron est né de la passion pour la gastronomie et le partage d'expériences culinaires uniques. Depuis notre lancement, nous nous sommes engagés à devenir une source incontournable pour les amateurs de cuisine, les gourmets et tous ceux qui apprécient les plaisirs de la table.
        </p>
      </section>

      <section className="history">
        <h2>Notre Histoire</h2>
        <p>
          Créé en [année de lancement], Restoron a été fondé par un groupe d'amoureux de la cuisine. Nous avons commencé en partageant des recettes familiales et des critiques de restaurants locaux, et avons rapidement attiré une communauté fidèle de lecteurs passionnés. Aujourd'hui, nous couvrons une variété de sujets allant des tendances culinaires aux astuces de cuisine, en passant par des recommandations de restaurants et des interviews de chefs.
        </p>
      </section>

      <section className="mission">
        <h2>Notre Mission</h2>
        <p>
          Notre mission est simple : célébrer la nourriture sous toutes ses formes. Nous nous efforçons de créer un espace où les lecteurs peuvent trouver des recettes délicieuses, des critiques honnêtes, des conseils pratiques et des histoires inspirantes sur la gastronomie. Que vous soyez un cuisinier amateur, un gastronome curieux ou simplement à la recherche d'inspiration pour votre prochain repas, Restoron est là pour vous.
        </p>
      </section>

      <section className="team">
        <h2>L'Équipe</h2>
        <p>
          Derrière chaque article se trouve une équipe dédiée de rédacteurs, de photographes et de gourmets. Nous venons de différents horizons, mais nous partageons tous une passion commune pour la bonne nourriture et le partage de nos découvertes culinaires avec le monde. Nous croyons que la cuisine rassemble les gens et enrichit nos vies de manière profonde.
        </p>
      </section>
    </div>
  );
};

export default About;