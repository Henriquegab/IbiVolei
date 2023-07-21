import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Dia = ({ diaSemana, dia, foiClicado, handleCliqueDia }) => {
  const handleClique = () => {
    // Atualize o estado de todos os dias para "false" antes de atualizar o estado do dia clicado para "true"
    handleCliqueDia();
  };

  

  const textSemana = foiClicado
    ? 'font-light text-lg text-ibiLaranja'
    : 'font-light text-lg text-white';

  const textDia = foiClicado
    ? 'font-bold text-lg text-ibiLaranja'
    : 'font-bold text-lg text-white';

    const styles = foiClicado
    ? 'space-x-2 px-5 rounded-3xl flex items-center flex-nowrap bg-white'
    : 'space-x-2 px-5 rounded-3xl flex items-center flex-nowrap';

  return (
    <TouchableOpacity onPress={handleClique} className={styles}>
      <Text className={textSemana}>{diaSemana}</Text>
      <Text className={textDia}>{dia}</Text>
    </TouchableOpacity>
  );
};

export default Dia;
