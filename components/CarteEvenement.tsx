import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Evenement, StatutType } from '../types';
import { BadgeEtat } from './BadgeEtat';

interface CarteEvenementProps {
  evenement: Evenement;
  placesLibres: number;
  statut: StatutType;
}

export const CarteEvenement: React.FC<CarteEvenementProps> = ({
  evenement,
  placesLibres,
  statut,
}) => {
  return (
    <View style={styles.carte}>
      <View style={styles.headerRow}>
        <Text style={styles.titre} numberOfLines={2}>
          {evenement.titre}
        </Text>
        <BadgeEtat statut={statut} />
      </View>

      <View style={styles.footerRow}>
        <Text style={styles.categorie}>{evenement.categorie}</Text>
        <Text style={styles.places}>
          {placesLibres === 0
            ? 'Aucune place'
            : `${placesLibres} place${placesLibres > 1 ? 's' : ''} libre${placesLibres > 1 ? 's' : ''}`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carte: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 8,
  },
  titre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
    flex: 1, // Bach l-titre ma i-dfe3ch l-badge berra l-carte
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categorie: {
    fontSize: 13,
    color: '#475569',
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  places: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1E3A8A',
  },
});