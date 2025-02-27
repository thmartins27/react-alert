# AlertContextProvider

O `AlertContextProvider` é um provedor de contexto que facilita a exibição de alertas de sucesso e erro em um aplicativo React. Ele fornece um hook `useAlert` que pode ser usado para disparar notificações.

## Instalação

Antes de utilizar o `AlertContextProvider`, certifique-se de importar os componentes `Success` e `Error` corretamente.

## Uso

### Envolvendo a Aplicação

Para que os alertas possam ser utilizados em qualquer parte do aplicativo, envolva o componente raiz com o `AlertContextProvider`.

```tsx
import { AlertContextProvider } from './AlertContext';

function App() {
  return (
    <AlertContextProvider>
      <YourComponent />
    </AlertContextProvider>
  );
}
```

### Disparando um Alerta

Dentro de um componente, utilize o hook `useAlert` para exibir mensagens de sucesso ou erro.

```tsx
import { useAlert } from './AlertContext';

function ExampleComponent() {
  const { alert } = useAlert();

  const handleClick = () => {
    alert('success', {
      title: 'Sucesso!',
      message: 'A operação foi concluída com sucesso.',
      time: 3000,
      callback: () => console.log('Alerta fechado'),
    });
  };

  return <button onClick={handleClick}>Mostrar Alerta</button>;
}
```

## API

### Tipos

```ts
export type AlertType = 'success' | 'error';

export type AlertConfig = {
  message: string;
  title: string;
  time?: number;
  callback?: () => void;
};
```

### `useAlert`

O hook `useAlert` retorna um objeto contendo o método `alert`, que pode ser usado para exibir alertas.

```ts
const { alert } = useAlert();
```

#### `alert(type: AlertType, config: AlertConfig)`

- `type`: O tipo de alerta (`'success'` ou `'error'`).
- `config`: Um objeto contendo as seguintes propriedades:
  - `title`: O título do alerta.
  - `message`: A mensagem do alerta.
  - `time` *(opcional)*: Tempo em milissegundos antes do alerta desaparecer (padrão: `3000`).
  - `callback` *(opcional)*: Função executada após o alerta ser fechado.

### Comportamento

1. Ao chamar `alert`, um estado interno é atualizado para exibir um dos componentes (`Success` ou `Error`).
2. O alerta permanece visível pelo tempo definido no `config.time` e, em seguida, é automaticamente fechado.
3. Se um `callback` for passado, ele será executado após o fechamento do alerta.

## Dependências

- `React`
- `useContext`
- `useState`
