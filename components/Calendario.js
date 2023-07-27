import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Dia from './Dia.js';
import moment from 'moment';
import 'moment/locale/pt-br'; // Importe o idioma desejado para o Moment
moment.locale('pt-br'); // Defina o idioma como português

const Calendario = ({ onDiaSelecionado }) => {
  const dataAtual = moment();
  const diaDaSemanaAtual = dataAtual.day();
  const siglasDiasDaSemana = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

  const [diaSelecionado, setDiaSelecionado] = useState(0);


  const handleDiaClick = (index) => {
    // Chama a função onDiaSelecionado passando o índice do dia selecionado
    onDiaSelecionado(index);
  };

  // Estado para armazenar os cliques nos dias
  const [diasClicados, setDiasClicados] = useState(Array(7).fill(false));

  const handleCliqueDia = (index) => {
    // Crie um novo array com todos os dias definidos como false
    const novosDiasClicados = Array(7).fill(false);

    // Defina o dia clicado como true
    novosDiasClicados[index] = true;

    // Atualize o estado de todos os dias
    setDiasClicados(novosDiasClicados);

      // Atualiza o estado do dia selecionado
    setDiaSelecionado(index);

    // Chama a função onDiaSelecionado passando o índice do dia selecionado
    onDiaSelecionado(index);
  };

  // Array para armazenar os botões com os dias da semana
  const botoesDiasDaSemana = [];

  // Gerar os botões com os dias da semana
  for (let i = 0; i < 7; i++) {
    // Calcular o dia correspondente para o botão atual
    const dia = dataAtual.clone().add(i, 'day');
    const diaDoMes = dia.date();
    const mes = dia.month(); // 0 para janeiro, 1 para fevereiro, etc.

    // Obter o índice do dia da semana correspondente ao botão atual
    // Adicionar o botão com as informações ao array
    botoesDiasDaSemana.push(
      <Dia
        key={i}
        diaSemana={siglasDiasDaSemana[dia.day()]}
        dia={diaDoMes}
        foiClicado={diasClicados[i]}
        diaAtual={dia.isSame(moment(), 'day')} // Verifica se é o dia atual
        handleCliqueDia={() => handleCliqueDia(i)}
      />
    );
  }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 2 }}
      className="pt-4"
    >
      <View className="flex-row justify-evenly items-center">
        {botoesDiasDaSemana}
      </View>
    </ScrollView>
  );
};

export default Calendario;
