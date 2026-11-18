import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BlocStatistiqueProps {
  libelle: string;
  valeur: number;
}

export const BlocStatistique: React.FC<BlocStatistiqueProps> = ({ libelle, valeur }) => {
  return (
    <View style={styles.carte}>
      <Text style={styles.valeur}>{valeur}</Text>
      <Text style={styles.libelle}>{libelle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  carte: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 12,
    width: '48%', // Bach i-jiw 2 f l-ligne (2 colonnes)
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  valeur: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  libelle: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 4,
  },
});