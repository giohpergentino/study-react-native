# Projeto React Native - Componentes e Hooks Básicos
Este projeto contém exemplos de como usar os componentes e hooks mais comuns no desenvolvimento de aplicativos mobile com React Native, como View, Text, useState, Button, TextInput, FlatList, e muito mais.

### 1. Instalação e Configuração
#### Pré-requisitos:
Certifique-se de que você tem o Expo CLI instalado. Caso contrário, você pode instalá-lo globalmente com o seguinte comando:

````bash
npm install -g expo-cli
````

- Criando o Projeto
Para criar um projeto React Native utilizando Expo:

````bash
npm create expo-app nome-do-projeto
````

- Entre no diretório do projeto:

```bash 
cd nome-do-projeto
```

- Inicie o servidor de desenvolvimento:

````bash
npm start
````
### 2. Principais Componentes Utilizados
#### 2.1. View e Text
- View: O componente base usado para criar layouts.
- Text: Usado para exibir texto.
#### Exemplo:
````bash
<View>
  <Text>Olá, Mundo!</Text>
</View>
````
#### 2.2. useState Hook
O hook useState permite que você adicione estado a componentes funcionais.
#### Exemplo:

````bash
const [contador, setContador] = useState(0);
````
#### 2.3. Button e onPress
- Button: Componente básico para interações do usuário.
- onPress: Propriedade que lida com o evento de clique.
#### Exemplo:

````bash 
<Button title="Clique Aqui" onPress={() => alert('Botão Pressionado!')} />
````
#### 2.4. TextInput e onChangeText
- TextInput: Usado para entrada de texto.
- onChangeText: Lida com as mudanças no texto digitado.
#### Exemplo:

```bash 
<TextInput placeholder="Digite algo" onChangeText={texto => setTexto(texto)} />
```
#### 2.5. Listas e Scroll
- ScrollView
Usado para criar uma view com rolagem vertical.
Exemplo:

````bash
<ScrollView>
  {/* conteúdo rolável */}
</ScrollView>
````
- FlatList
Usado para renderizar listas com grandes quantidades de dados de maneira eficiente.
#### Exemplo:

````bash
<FlatList
  data={dados}
  renderItem={({ item }) => <Text>{item.nome}</Text>}
  keyExtractor={item => item.id}
/>
````
#### 2.6. TouchableComponents
Os componentes Touchable permitem criar áreas interativas personalizáveis.

- TouchableOpacity: Um botão personalizável que diminui a opacidade ao ser pressionado.
#### Exemplo:

````bash
<TouchableOpacity onPress={() => alert('Pressionado!')}>
  <Text>Pressione Aqui</Text>
</TouchableOpacity>
````
#### 3. Comandos Úteis
Rodar o projeto:
````bash
npm start
````
Rodar no emulador Android (com Expo):
````bash
npm run android
````
Rodar no emulador iOS (com Expo, macOS necessário):
````bash
npm run ios
````
#### Depuração do Projeto
- React DevTools: Você pode usar o React DevTools para inspecionar a hierarquia de componentes e estado. Para instalar:
````bash
npm install --global react-devtools
react-devtools
````
- Console.log: Use console.log para imprimir valores no console e depurar facilmente.
````bash
console.log('Valor do contador:', contador);
````
#### 4. Dicas Importantes de React Native
- Estilos
O React Native usa StyleSheet para gerenciar estilos de forma semelhante ao CSS.
Exemplo:
````bash
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'blue',
  }
});
````
- Hooks
Utilize o useState para gerenciar estado dentro de componentes funcionais.
Combine useEffect para executar efeitos colaterais, como requisições de API.
- List Rendering
Para renderizar listas longas, prefira o uso de FlatList ou SectionList para melhorar o desempenho em comparação ao ScrollView.
- Layout Flexbox
O layout padrão no React Native é baseado em Flexbox. Use as propriedades flex, alignItems e justifyContent para posicionar seus elementos.
````bash
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Alinhamento vertical
    alignItems: 'center', // Alinhamento horizontal
  }
});
````
