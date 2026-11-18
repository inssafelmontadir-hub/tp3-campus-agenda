import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatutType } from '../types';

interface BadgeEtatProps {
  statut: StatutType;
}

export const BadgeEtat: React.FC<BadgeEtatProps> = ({ statut }) => {
  // Choix dyal les couleurs 3la 7sab l-statut
  const getCouleurs = () => {
    switch (statut) {
      case 'Complet':
        return { bg: '#FEE2E2', text: '#DC2626' }; // Rouge clair
      case 'Presque complet':
        return { bg: '#FEF3C7', text: '#D97706' }; // Orange clair
      case 'Ouvert':
        return { bg: '#DCFCE7', text: '#16A34A' }; // Vert clair
    }
  };

  const couleurs = getCouleurs();

  return (
    <View style={[styles.badge, { backgroundColor: couleurs.bg }]}>
      <Text style={[styles.texte, { color: couleurs.text }]}>{statut}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  texte: {
    fontSize: 12,
    fontWeight: '700',
  },
});