import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, StatusBar } from 'react-native';
import { Evenement, StatutType } from './types';
import { BlocStatistique } from './components/BlocStatistique';
import { CarteEvenement } from './components/CarteEvenement';

// 1. Données imposées
const evenements: Evenement[] = [
  { id: 'E01', titre: 'Atelier React', categorie: 'Atelier', capacite: 25, inscrits: 25 },
  { id: 'E02', titre: 'Conférence IA', categorie: 'Conférence', capacite: 70, inscrits: 52 },
  { id: 'E03', titre: 'Sécurité mobile', categorie: 'Atelier', capacite: 20, inscrits: 17 },
  { id: 'E04', titre: 'Design UI', categorie: 'Atelier', capacite: 18, inscrits: 9 },
  { id: 'E05', titre: 'Forum projets', categorie: 'Rencontre', capacite: 50, inscrits: 49 },
  { id: 'E06', titre: 'Découverte Git', categorie: 'Atelier', capacite: 24, inscrits: 24 },
];

// Constante dyal l-mode ('tous' ola 'ateliers')
const mode: 'Tout' | 'ateliers' = 'Tout';

// 2. Fonctions de calcul
const placesRestantes = (e: Evenement): number => {
  return Math.max(0, e.capacite - e.inscrits);
};

const statutEvenement = (e: Evenement): StatutType => {
  const r = placesRestantes(e);
  if (r === 0) return 'Complet';
  if (r <= 3) return 'Presque complet';
  return 'Ouvert';
};

export default function App() {
  // 3. Calculs des indicateurs globaux
  const totalEvenements = evenements.length;
  const evenementsComplets = evenements.filter((e) => placesRestantes(e) === 0).length;
  const evenementsAvecPlaces = evenements.filter((e) => placesRestantes(e) > 0).length;
  const sommePlacesRestantes = evenements.reduce((acc, e) => acc + placesRestantes(e), 0);

  // 4. Filtrage selon le mode
  const ateliersDisponibles = evenements.filter(
    (e) => e.categorie === 'Atelier' && placesRestantes(e) > 0
  );

  const listeAffichee = mode === 'tous' ? evenements : ateliersDisponibles;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* En-tête */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>CampusAgenda</Text>
        <Text style={styles.subTitle}>Événements du campus</Text>
      </View>

      {/* Grille de statistiques */}
      <View style={styles.statsGrid}>
        <BlocStatistique libelle="Événements au total" valeur={totalEvenements} />
        <BlocStatistique libelle="Places restantes" valeur={sommePlacesRestantes} />
        <BlocStatistique libelle="Événements complets" valeur={evenementsComplets} />
        <BlocStatistique libelle="Avec des places" valeur={evenementsAvecPlaces} />
      </View>

      {/* Titre du mode actuel */}
      <Text style={styles.sectionTitle}>
        {mode === 'tous' ? 'Tous les événements' : 'Ateliers disponibles'}
      </Text>

      {/* Liste des événements */}
      <FlatList
        data={listeAffichee}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CarteEvenement
            evenement={item}
            placesLibres={placesRestantes(item)}
            statut={statutEvenement(item)}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyText}>Aucun événement à afficher pour le moment.</Text>
          </View>
        }
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 16,
  },
  header: {
    backgroundColor: '#1E3A8A',
    padding: 16,
    borderRadius: 16,
    marginTop: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subTitle: {
    fontSize: 14,
    color: '#DBEAFE',
    marginTop: 4,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 24,
  },
  emptyBox: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
  emptyText: {
    color: '#64748B',
    fontSize: 14,
  },
});