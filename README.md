# Sistema de Alertas com React e Context API  

Este projeto fornece um sistema de alertas utilizando **React**, **Context API** e **TailwindCSS**, permitindo exibir mensagens de sucesso e erro de forma dinâmica.  

## 🚀 Tecnologias  

- React  
- Context API  
- TailwindCSS  
- Heroicons  
- Headless UI  

## 📦 Instalação  

```sh  
git clone https://github.com/thmartins27/react-alert
cd alert  
pnpm install  
```  

## ▶️ Uso  

### 1. Envolva a aplicação com o `AlertContextProvider`  

No arquivo `_app.tsx` ou em um nível superior do componente:  

```tsx  
import { AlertContextProvider } from '../context/alert.context';  

function MyApp({ Component, pageProps }) {  
  return (  
    <AlertContextProvider>  
      <Component {...pageProps} />  
    </AlertContextProvider>  
  );  
}  

export default MyApp;  
```  

### 2. Utilize o hook `useAlert` para disparar alertas  

```tsx  
import { useAlert } from '../context/alert.context';  

const MyComponent = () => {  
  const { alert } = useAlert();  

  return (  
    <button  
      onClick={() =>  
        alert('success', {  
          title: 'Operação concluída',  
          message: 'O item foi salvo com sucesso.',  
        })  
      }  
    >  
      Exibir Alerta  
    </button>  
  );  
};  
```  

## 🎨 Personalização  

Os estilos dos alertas podem ser ajustados diretamente nos componentes `Success.tsx` e `Error.tsx`, modificando as classes do TailwindCSS.  

## 🛠️ Desenvolvimento  

Para rodar o projeto localmente:  

```sh  
pnpm dev  
```  

## 📄 Licença  

Este projeto está licenciado sob a **MIT License**.
