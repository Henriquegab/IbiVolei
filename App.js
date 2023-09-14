import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AgendarQuadra from './screens/AgendarQuadra';
import Grupos from './screens/Grupos';
import Options from './screens/Options';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Cog8ToothIcon } from 'react-native-heroicons/solid'
import { Cog8ToothIcon as OutlineCog8ToothIcon } from 'react-native-heroicons/outline'
import { UsersIcon } from 'react-native-heroicons/solid'
import { UsersIcon as OutlineUsersIcon } from 'react-native-heroicons/outline'
import { HomeIcon } from 'react-native-heroicons/solid'
import { HomeIcon as OutlineHomeIcon } from 'react-native-heroicons/outline'
import { SquaresPlusIcon } from 'react-native-heroicons/solid'
import { SquaresPlusIcon as OutlineSquaresPlusIcon  } from 'react-native-heroicons/outline'
import { RootSiblingParent } from 'react-native-root-siblings';
import GruposCriar from './screens/CriarGrupo';
import GruposGerenciar from './screens/GerenciarGrupo';
import GruposEncontrar from './screens/EncontrarGrupo';
import GruposEspecifico from './screens/GrupoEspecifico';
import { PaperProvider } from 'react-native-paper';
import { TransitionPresets } from '@react-navigation/native-stack';




const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <RootSiblingParent>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: 'white', // Defina a cor do ícone/título quando ativo
              tabBarInactiveTintColor: 'gray', // Defina a cor do ícone/título quando inativo
              tabBarStyle: { backgroundColor: '#ff5f01' }, // Defina a cor de fundo da barra de navegação
              headerStyle: { backgroundColor: '#ff5f01' }, // Defina a cor de fundo do cabeçalho
              headerTitleStyle: { color: 'white' },
              tabBarShowLabel: false,
              TransitionPresets,
            }}
          >
            <Tab.Screen name="Home" component={HomeScreen} 
            options={{
              tabBarIcon: ({ color, size }) => (
                
                color === 'white' ? <HomeIcon color="white" size={28} /> : <OutlineHomeIcon color="white" size={28} />
              ),
            }}
            
            />
            <Tab.Screen name="Agendar Quadra" component={AgendarQuadra} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  color === 'white' ? <SquaresPlusIcon color="white" size={28} /> : <OutlineSquaresPlusIcon color="white" size={28} />
                  
                ),
              }}
            />
            <Tab.Screen name="Grupos" component={Grupos} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  color === 'white' ? <UsersIcon color="white" size={28} /> : <OutlineUsersIcon color="white" size={28} />
                  
                ),
              }}
            />
            <Tab.Screen name="Opções" component={Options} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  color === 'white' ? <Cog8ToothIcon color="white" size={28} /> : <OutlineCog8ToothIcon color="white" size={28} />
                  
                ),
              }}
            
            />

            {/* Outras telas */}

            {/* Grupos */}
              <Tab.Screen
              name="Criar Grupo"
              component={GruposCriar}
              options={{
                tabBarButton: () => null, // Isso faz com que a tela seja invisível no tab bar
              }}
              />
              <Tab.Screen
              name="Gerenciar Grupos"
              component={GruposGerenciar}
              options={{
                tabBarButton: () => null, // Isso faz com que a tela seja invisível no tab bar
              }}
              />
              <Tab.Screen
              name="Encontrar Grupos"
              component={GruposEncontrar}
              options={{
                tabBarButton: () => null, // Isso faz com que a tela seja invisível no tab bar
              }}
              />
              <Tab.Screen
              name="Grupo Específico"
              component={GruposEspecifico}
              options={{
                tabBarButton: () => null, // Isso faz com que a tela seja invisível no tab bar
              }}
              />
            
            
          </Tab.Navigator>
          
          
        </RootSiblingParent>
      </PaperProvider>
    </NavigationContainer>
  );
}
