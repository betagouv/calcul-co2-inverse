import react,{Component} from "react";

const Data = [
{
  'limite trajet urbain': '80km',
  'extra-urbains': [
    {
      titre: 'avion',
      'icônes': '✈️',
      moyenne: 300,
      'gCO2e/km/personne': [Object],
      note: `Sur ce lien, filtrer les résultats par l'unité "kgCO2e /passager.km".`,
      source: 'https://www.bilans-ges.ademe.fr/fr/basecarbone/donnees-consulter/liste-element?recherche=Avion'
    },
    {
      titre: 'TGV',
      'icônes': '🚄',
      moyenne: 1.9,
      'gCO2e/km/personne': 1.9,
      source: 'https://www.oui.sncf/aide/calcul-des-emissions-de-co2-sur-votre-trajet-en-train'
    },
    {
      titre: 'Trains grandes lignes',
      'icônes': '🚈',
      moyenne: 5.7,
      'gCO2e/km/personne': 5.7,
      source: 'https://www.oui.sncf/aide/calcul-des-emissions-de-co2-sur-votre-trajet-en-train'
    },
    {
      titre: 'voiture thermique',
      'icônes': '🚗',
      moyenne: 72.4,
      'gCO2e/km/personne': 72.4,
      voyageurs: 2.4,
      note: 'Calculs ADEME, base Comptes des transports CGDD (2019) ; hypothèse 2,4 passagers/voiture'
    },
    {
      titre: 'vélo',
      'icônes': '🚴',
      moyenne: 0,
      'gCO2e/km/personne': 0,
      note: "L'impact du vélo est ici considéré comme négligeable."
    },
    {
      titre: 'bus thermique',
      'icônes': '🚌',
      moyenne: 103,
      'gCO2e/km/personne': [Object],
      note: "Calculs ADEME à partir d'HBEFA (2020). Notons que les bus ne transportent en moyenne pas plus de 10 personnes. Prendre le bus, c'est augmenter les taux de remplissage et donc améliorer le bilan de ce moyen de transport !"
    }
  ]
}
];

export default Data;
